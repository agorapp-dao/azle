use swc_ecma_ast::{TsFnParam, TsType, TsTypeAnn};

use crate::ts_ast::traits::GetTsType;

pub trait FunctionAndMethodTypeHelperMethods {
    fn get_ts_type_ann(&self) -> TsTypeAnn;
    fn get_ts_fn_params(&self) -> Vec<TsFnParam>;
    fn get_valid_return_types(&self) -> Vec<&str>;
    fn get_return_type(&self) -> Option<TsType>;

    fn get_param_types(&self) -> Vec<TsType> {
        self.get_ts_fn_params().iter().fold(vec![], |acc, param| {
            vec![acc, vec![param.get_ts_type().clone()]].concat()
        })
    }
}

impl GetTsType for TsFnParam {
    fn get_ts_type(&self) -> TsType {
        match self {
            TsFnParam::Ident(identifier) => match &identifier.type_ann {
                Some(param_type) => param_type.get_ts_type(),
                None => panic!("Function parameters must have a type"),
            },
            TsFnParam::Array(_) => {
                panic!("Array destructuring in parameters is unsupported at this time")
            }
            TsFnParam::Rest(_) => panic!("Rest parameters are not supported at this time"),
            TsFnParam::Object(_) => {
                panic!("Object destructuring in parameters is unsupported at this time")
            }
        }
    }
}
