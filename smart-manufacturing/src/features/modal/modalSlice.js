import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isError: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    toggleError: (state) => {
      state.isError = !state.isError;
    },
  },
});

export const { openModal, closeModal, toggleError } = modalSlice.actions;

export default modalSlice.reducer;
