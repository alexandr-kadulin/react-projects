import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import tableItems from "../../mock-data.json";

const initialState = {
  tableItems: tableItems,
  preservedItems: tableItems,
  editItem: {
    id: "",
    name: "",
    description: "",
    latitude: "",
    longitude: "",
    status: "",
    address: "",
  },
  dropdownValue: "",
  sortType: "",
  sortField: "",
  isLoading: true,
  isEdit: false,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const id = action.payload;
      state.tableItems = state.tableItems.filter((item) => item.id !== id);
    },
    addItem: (state, action) => {
      const newItem = {
        ...action.payload,
        id: new Date().getTime().toString(),
      };
      state.tableItems.unshift(newItem);
    },
    replaceItem: (state, action) => {
      const newItem = action.payload;
      const index = state.tableItems.findIndex(
        (item) => item.id === state.editItem.id
      );
      state.tableItems[index] = newItem;
    },
    deactivateLocation: (state, action) => {
      const id = action.payload;
      const index = state.tableItems.findIndex((item) => item.id === id);
      state.tableItems[index].status = "Deactivated";
    },
    setDropdownValue: (state, action) => {
      state.dropdownValue = action.payload;
    },
    setEditItem: (state, action) => {
      if (action.payload) {
        const id = action.payload;
        state.editItem = state.tableItems.find((item) => item.id === id);
        state.isEdit = true;
      } else {
        state.editItem = {
          id: "",
          name: "",
          description: "",
          latitude: "",
          longitude: "",
          status: "",
          address: "",
        };
        state.isEdit = false;
      }
    },
    filterItems: (state, action) => {
      let tempItems = [...state.preservedItems];
      let filterValue = action.payload;
      const value = state.dropdownValue;

      if (filterValue) {
        tempItems = tempItems.filter((item) => {
          return value
            ? item[value].toString().toLowerCase().startsWith(filterValue)
            : null;
        });
      }

      state.tableItems = tempItems;
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
});

export const {
  removeItem,
  addItem,
  setEditItem,
  replaceItem,
  sortItems,
  setDropdownValue,
  filterItems,
  deactivateLocation,
} = tableSlice.actions;

export default tableSlice.reducer;
