pub fn generate_ic_object_function_accept_message() -> proc_macro2::TokenStream {
    quote::quote! {
        fn _azle_ic_accept_message(
            _this: &boa_engine::JsValue,
            _aargs: &[boa_engine::JsValue],
            _context: &mut boa_engine::Context
        ) -> boa_engine::JsResult<boa_engine::JsValue> {
            Ok(ic_cdk::api::call::accept_message().try_into_vm_value(_context))
        }
    }
}
