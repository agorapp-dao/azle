use proc_macro2::TokenStream;
use quote::quote;

pub fn generate(function_name: &String) -> TokenStream {
    let function_call = format!("{function_name}()");
    quote! {
        BOA_CONTEXT_REF_CELL.with(|boa_context_ref_cell| {
            let mut boa_context = boa_context_ref_cell.borrow_mut();

            boa_context
                .eval(boa_engine::Source::from_bytes(#function_call))
                .map_err(|js_error: boa_engine::JsError| {
                    format!(
                        "\nUncaught {}",
                        js_error
                            .to_std_string(0, &mut *boa_context)
                            .unwrap_or_else(|e| e.to_string())
                    )
                })?
                .try_from_vm_value(&mut *boa_context)
                .map_err(|js_error: boa_engine::JsError| {
                    format!(
                        "\nUncaught {}",
                        js_error
                            .to_std_string(0, &mut *boa_context)
                            .unwrap_or_else(|e| e.to_string())
                    )
                })?
        })
    }
}
