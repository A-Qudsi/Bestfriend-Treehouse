import { combineReducers } from "redux";

import modalReducer from "./modal_reducer";
import filtersReducer from "./filter_reducer";
import keywordSearchReducer from "./keyword_search_reducer";

export default combineReducers({
  modal: modalReducer,
  filters: filtersReducer,
  keyword: keywordSearchReducer
});
