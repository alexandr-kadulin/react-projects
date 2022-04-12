import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./features/table/tableSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    table: tableReducer,
    modal: modalReducer,
  },
});
