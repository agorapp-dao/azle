pub fn generate() -> proc_macro2::TokenStream {
    quote::quote! {
        fn _azle_ic_stable_b_tree_map_insert(
            _this: &boa_engine::JsValue,
            _aargs: &[boa_engine::JsValue],
            _context: &mut boa_engine::Context
        ) -> boa_engine::JsResult<boa_engine::JsValue> {
            // TODO: Implement this!
            Ok("rust_value".to_string().try_into_vm_value(_context).unwrap())
        }
    }
}
