use cdk_framework::act::node::{candid::Primitive, CandidType};

use crate::{traits::GetName, ts_ast::azle_type::AzleTypeRef};

impl AzleTypeRef<'_> {
    pub fn to_candid_type(&self) -> CandidType {
        match self.get_name() {
            "blob" => CandidType::Primitive(Primitive::Blob),
            "float32" => CandidType::Primitive(Primitive::Float32),
            "float64" => CandidType::Primitive(Primitive::Float64),
            "int" => CandidType::Primitive(Primitive::Int),
            "int8" => CandidType::Primitive(Primitive::Int8),
            "int16" => CandidType::Primitive(Primitive::Int16),
            "int32" => CandidType::Primitive(Primitive::Int32),
            "int64" => CandidType::Primitive(Primitive::Int64),
            "nat" => CandidType::Primitive(Primitive::Nat),
            "nat8" => CandidType::Primitive(Primitive::Nat8),
            "nat16" => CandidType::Primitive(Primitive::Nat16),
            "nat32" => CandidType::Primitive(Primitive::Nat32),
            "nat64" => CandidType::Primitive(Primitive::Nat64),
            "Principal" => CandidType::Primitive(Primitive::Principal),
            "empty" => CandidType::Primitive(Primitive::Empty),
            "reserved" => CandidType::Primitive(Primitive::Reserved),
            "text" => CandidType::Primitive(Primitive::String),
            "Opt" => CandidType::Opt(self.to_option()),
            "Func" => CandidType::Func(self.to_func(None)),
            "Record" => CandidType::Record(self.to_record()),
            "Tuple" => CandidType::Tuple(self.to_tuple()),
            "Vec" => CandidType::Array(self.to_vec()),
            "Variant" => CandidType::Variant(self.to_variant()),
            _ => CandidType::TypeRef(self.to_type_ref()),
        }
    }
}
