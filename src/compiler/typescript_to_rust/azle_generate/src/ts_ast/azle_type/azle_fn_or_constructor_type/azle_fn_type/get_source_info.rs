use super::AzleFnType;
use crate::traits::{GetSourceFileInfo, GetSourceInfo};

impl GetSourceInfo for AzleFnType<'_> {
    fn get_source(&self) -> String {
        self.source_map.get_source(self.ts_fn_type.span)
    }

    fn get_line_number(&self) -> usize {
        self.source_map.get_line_number(self.ts_fn_type.span)
    }

    fn get_origin(&self) -> String {
        self.source_map.get_origin(self.ts_fn_type.span)
    }

    fn get_range(&self) -> (usize, usize) {
        self.source_map.get_range(self.ts_fn_type.span)
    }
}
