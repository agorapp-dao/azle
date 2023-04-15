use swc_ecma_ast::{TsEntityName, TsFnParam, TsMethodSignature, TsType, TsTypeAnn};

use crate::{
    traits::{Callable, GetName, GetTsType},
    ts_ast::source_map::SourceMapped,
};

impl Callable for SourceMapped<'_, TsMethodSignature> {
    fn get_ts_fn_params(&self) -> Vec<TsFnParam> {
        self.params.clone()
    }

    fn get_ts_type_ann(&self) -> TsTypeAnn {
        match &self.type_ann {
            Some(type_ann) => type_ann.clone(),
            None => panic!("{}", self.no_type_annotation_error()),
        }
    }

    fn get_valid_return_types(&self) -> Vec<&str> {
        vec!["Oneway", "Update", "Query", "CallResult"]
    }

    fn get_return_type(&self) -> Option<TsType> {
        let mode = match self.get_ts_type_ann().get_ts_type() {
            TsType::TsTypeRef(type_reference) => match &type_reference.type_name {
                TsEntityName::TsQualifiedName(_) => panic!("Unsupported qualified name. Func return type must directly be Query, Update, or Oneway"),
                TsEntityName::Ident(identifier) => {
                let mode = identifier.get_name();
                if !self.get_valid_return_types().contains(&mode) {
                    panic!("Return type must be one of {:?}", self.get_valid_return_types())
                }
                mode.to_string()
            }
            },
            _ => panic!("Return type must be one of {:?}", self.get_valid_return_types()),
        };

        if mode == "Oneway" {
            None
        } else {
            let ts_type = self.get_ts_type_ann().get_ts_type();
            let ts_type_ref = ts_type.as_ts_type_ref().unwrap();
            match &ts_type_ref.type_params {
                Some(type_param_inst) => {
                    if type_param_inst.params.len() != 1 {
                        panic!("Func must specify exactly one return type")
                    }
                    match type_param_inst.params.get(0) {
                        Some(param) => {
                            let ts_type = &**param;
                            Some(ts_type.clone())
                        }
                        None => panic!("Func must specify exactly one return type"),
                    }
                }
                None => panic!("Func must specify a return type"),
            }
        }
    }
}
