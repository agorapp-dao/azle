use super::AzleKeywordType;
use crate::ts_ast::{source_map::GetSourceFileInfo, traits::GetSourceInfo};

impl GetSourceInfo for AzleKeywordType<'_> {
    fn get_source(&self) -> String {
        self.source_map.get_source(self.ts_keyword_type.span)
    }

    fn get_line_number(&self) -> usize {
        self.source_map.get_line_number(self.ts_keyword_type.span)
    }

    fn get_origin(&self) -> String {
        self.source_map.get_origin(self.ts_keyword_type.span)
    }

    fn get_range(&self) -> (usize, usize) {
        self.source_map.get_range(self.ts_keyword_type.span)
    }
}
