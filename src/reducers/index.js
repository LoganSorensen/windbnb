import { combineReducers } from "redux";

import { setFilters } from "./setFiltersReducer";

const rootReducer = combineReducers({
  setFilters,
});

export default rootReducer;
