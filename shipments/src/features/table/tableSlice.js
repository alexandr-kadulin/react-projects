import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import _ from "lodash";
import tableItems from "../../mock-data.json";

const url = "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";

const initialState = {
  tableItems: [],
  editItem: null,
  isLoading: true,
  sortType: "",
  sortField: "",
};

export const getTableItems = createAsyncThunk(
  "table/getTableItems",
  async () => {
    try {
      const response = await axios(url);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const orderNo = action.payload;
      state.tableItems = state.tableItems.filter(
        (item) => item.orderNo !== orderNo
      );
    },
    replaceItem: (state, action) => {
      const newItem = action.payload;
      const index = state.tableItems.findIndex(
        (item) => item.orderNo === state.editItem.orderNo
      );
      state.tableItems[index] = newItem;
    },
    setEditItem: (state, action) => {
      const orderNo = action.payload;
      state.editItem = state.tableItems.find(
        (item) => item.orderNo === orderNo
      );
    },
    sortItems: (state, action) => {
      if (!state.sortType) {
        state.tableItems = _.orderBy(state.tableItems, action.payload, "desc");
        state.sortType = "desc";
        state.sortField = action.payload;
        return;
      }
      if (state.sortType === "desc") {
        state.tableItems = _.orderBy(state.tableItems, action.payload, "asc");
        state.sortType = "asc";
        state.sortField = action.payload;
        return;
      }
      if (state.sortType === "asc") {
        state.tableItems = _.orderBy(state.tableItems, action.payload, "desc");
        state.sortType = "desc";
        state.sortField = action.payload;
        return;
      }
    },
  },
  extraReducers: {
    [getTableItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getTableItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.tableItems = action.payload || tableItems;
    },
    [getTableItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { removeItem, setEditItem, replaceItem, sortItems } =
  tableSlice.actions;

export default tableSlice.reducer;
