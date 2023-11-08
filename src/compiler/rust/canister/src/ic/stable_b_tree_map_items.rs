use std::convert::TryInto;

use quickjs_wasm_rs::{to_qjs_value, CallbackArg, JSContextRef, JSValue, JSValueRef};

use crate::STABLE_B_TREE_MAPS;

pub fn native_function<'a>(
    context: &'a JSContextRef,
    _this: &CallbackArg,
    args: &[CallbackArg],
) -> Result<JSValueRef<'a>, anyhow::Error> {
    let memory_id: usize = args
        .get(0)
        .expect("stable_b_tree_map_items argument 0 is undefined")
        .to_js_value()?
        .try_into()?;

    let items: Vec<Vec<Vec<u8>>> = STABLE_B_TREE_MAPS.with(|stable_b_tree_maps| {
        let stable_b_tree_maps = stable_b_tree_maps.borrow();

        stable_b_tree_maps[&(memory_id as u8)]
            .iter()
            .map(|(key, value)| vec![key.candid_bytes, value.candid_bytes])
            .collect()
    });

    let js_values: Vec<Vec<JSValue>> = items
        .into_iter()
        .map(|items| {
            let keys = items[0].clone();
            let values = items[1].clone();

            vec![keys.into(), values.into()]
        })
        .collect();
    let js_values: Vec<JSValue> = js_values.into_iter().map(|items| items.into()).collect();

    let js_value: JSValue = js_values.into();

    to_qjs_value(&context, &js_value)
}
