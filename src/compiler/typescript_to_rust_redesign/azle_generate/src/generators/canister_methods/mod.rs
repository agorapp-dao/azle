mod query;
mod functions;
mod update;
mod types;
mod type_aliases;
mod rust_types;

pub use query::{
    generate_query_function_infos,
    get_query_fn_decls
};

pub use update::{
    generate_update_function_token_streams,
    get_update_fn_decls
};

pub use functions::{
    generate_function_info,
    FunctionInformation
};

pub use type_aliases::{
    generate_type_alias_token_streams
};

pub use rust_types::{
    RustType,
    KeywordInfo,
    TypeRefInfo,
    ArrayTypeInfo,
    StructInfo,
};

pub use types::{
    ts_type_to_rust_type
};

use swc_ecma_ast::{Program, FnDecl, ModuleDecl, ExportDecl, Module, TsTypeAliasDecl};

pub fn get_ast_type_alias_decls_from_programs(programs: &Vec<Program>) -> Vec<TsTypeAliasDecl> {
    programs.iter().fold(vec![], |acc, program| {
        let ast_struct_decls = get_ast_type_alias_decls_from_program(program);

        vec![acc, ast_struct_decls].concat()
    })
}

pub fn get_ast_fn_decls_from_programs(programs: &Vec<Program>) -> Vec<FnDecl> {
    programs.iter().fold(vec![], |acc, program| {
        let ast_fn_decls = get_ast_fn_decls_from_program(program);

        vec![acc, ast_fn_decls].concat()
    })
}

fn get_export_decls(module: &Module) -> Vec<ExportDecl> {
    let module_decls: Vec<ModuleDecl> =
        module
            .body
            .iter()
            .filter(|module_item| module_item.is_module_decl())
            .map(|module_item| module_item.as_module_decl().unwrap().clone())
            .collect();

    let export_decls: Vec<ExportDecl> =
        module_decls
            .iter()
            .filter(|module_decl| module_decl.is_export_decl())
            .map(|module_decl| {
                module_decl.as_export_decl().unwrap().clone()
            })
            .collect();

    export_decls
}

pub fn get_ast_type_alias_decls_from_program(program: &Program) -> Vec<TsTypeAliasDecl> {
    match program {
        Program::Module(module) => {
            // TODO get rid of this test code
            // let body_len = module.body.len();
            // if body_len != 6 {
            //     return vec![]
            // }
            // println!("Continuing");
            let export_decls = get_export_decls(module);

            let type_alias_decls: Vec<TsTypeAliasDecl> =
                export_decls
                .iter()
                .filter(|export_decl| export_decl.decl.is_ts_type_alias())
                .map(|export_decl| {
                    export_decl.decl.as_ts_type_alias().unwrap().clone()
                })
                .collect();

            type_alias_decls

        },
        Program::Script(_) => vec![],
    }
}

pub fn get_ast_fn_decls_from_program(program: &Program) -> Vec<FnDecl> {
    match program {
        Program::Module(module) => {
            let export_decls = get_export_decls(module);

            let fn_decls: Vec<FnDecl> =
                export_decls
                .iter()
                .filter(|export_decl| export_decl.decl.is_fn_decl())
                .map(|export_decl| {
                    export_decl.decl.as_fn_decl().unwrap().clone()
                })
                .collect();

            fn_decls
        },
        Program::Script(_) => {
            vec![]
        }
    }
}
