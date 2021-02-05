import { SET_FILTERS } from "./types";

export const setFilters = (filters) => {
  console.log("actions", filters);
  return { type: SET_FILTERS, payload: filters };
};
