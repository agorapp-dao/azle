use std::{collections::HashSet, vec};

use proc_macro2::TokenStream;
use quote::{format_ident, quote};
use swc_ecma_ast::TsTypeAliasDecl;

use super::{generate_hash_map, ts_type_to_rust_type, RustType};

/**
 * Loops through all of the dependant types, finds the corresponding ts types in
 * the type aliases, converts them to a rust type, and inserts it into the
 * result map
 */
pub fn generate_record_token_streams(
    type_alias_dependant_types: &HashSet<String>,
    ast_type_alias_decls: &Vec<TsTypeAliasDecl>,
) -> Vec<TokenStream> {
    let type_alias_lookup = generate_hash_map(ast_type_alias_decls);

    // For each dependant type, generate a dependency map and add it to the overall dependency map
    // TODO I'm guessing that we aren't going to want acc to be mutable
    type_alias_dependant_types
        .iter()
        .fold(vec![], |acc, dependant_type| {
            let type_alias_decl = type_alias_lookup.get(dependant_type);
            let token_stream = match type_alias_decl {
                Some(type_alias_decl) => type_alias_to_token_stream(type_alias_decl),
                None => {
                    // For right now we are going to assume that if it's not in the map then we caught it somewhere else
                    // TODO for the future we should fix that assumption by limiting type_alias_dependant_types to be only the records
                    // Right now I think we are passing in whatever
                    // todo!("ERROR: Dependant Type [{dependant_type}] not found type alias list!")
                    quote!()
                }
            };
            vec![acc, vec![token_stream]].concat()
        })
}

/**
 * Generate a dependency map for the given type alias decl using the given type
 * alias lookup map.
 *
 * As a reminder the type alias decl looks like this
 * TsTypeAliasDeclaration {
 *     id: Identifier; (Will have the name of the type alias)
 *     typeAnnotation: TsType; (Will have the type that the alias is aliasing)
 * }
 *
 * This will get the name from the id, parse the type from the typeAnnotation.
 * Then return a map with the idea as the key and an alias token stream as the value.
 *
 * {
 *     id: `type id = TsTypeAsTokenStream`;
 * }
 *
 * It is possible that the TsType from the typeAnnotation will also have
 * dependencies. In this case we will collect the dependency map for that type
 * as well and extend the result to include that information.
 *
 * {
 *     id: `type id = {member1: sub_id1, member2: sub_id2}`;
 *     sub_id1: `type sub_id1 = SubTsType1AsTokenStream`;
 *     sub_id2: `type sub_id2 = SubTsType2AsTokenStream`;
 * }
 *
 * When you get an item from the hash map it will be the type alias token stream, and the list of structs that it alone
 * requires
 */
fn type_alias_to_token_stream(type_alias_decl: &TsTypeAliasDecl) -> TokenStream {
    let ts_type_name = type_alias_decl.id.sym.chars().as_str().to_string();
    let ts_type_alias_ident = format_ident!("{}", ts_type_name);

    let ts_type = *type_alias_decl.type_ann.clone();

    let aliased_rust_type = ts_type_to_rust_type(&ts_type, &Some(&ts_type_alias_ident));
    aliased_rust_type.to_type_definition_token_stream()
}

fn rust_inline_type_to_token_stream(rust_type: &RustType) -> TokenStream {
    let rust_type_structure = match rust_type.get_structure() {
        Some(structure) => structure,
        None => quote!(),
    };
    let rust_member_type_structures: Vec<TokenStream> = rust_type
        .get_inline_members()
        .iter()
        .map(|member| rust_inline_type_to_token_stream(member))
        .collect();
    quote! {
        #rust_type_structure
        #(#rust_member_type_structures)*
    }
}
