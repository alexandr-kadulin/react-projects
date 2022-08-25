import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";
import _ from "lodash";

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER,
  LOGIN_USER,
  SORT_ITEMS,
  FILTER_ITEMS,
  SET_EDIT_ITEM,
  CLOSE_MODAL,
  REMOVE_ITEM,
  SET_DROPDOWN_VALUE,
  REPLACE_ITEM,
  ADD_ITEM,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_PENDING,
  SET_IS_CARS,
} from "./actions";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const isCars = localStorage.getItem("isCars");

const initialState = {
  tableItems: [],
  preservedItems: [],
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token || null,
  dropdownValue: "",
  sortType: "",
  sortField: "",
  error: "",
  isCars: isCars || false,
  isEdit: false,
  isOpen: false,
  isLoading: false,
  showAlert: false,
  editItem: {
    id: "",
    make: "",
    vin: "",
    plate_number: "",
    cost: "",
    photo: "",
  },
};

const AppContext = React.createContext(initialState);

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchAllCars = () => {
    dispatch({ type: FETCH_PENDING });
    axios
      .get("http://localhost:8999/cars")
      .then((response) => {
        dispatch({ type: FETCH_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };

  const displayAlert = (msg) => {
    dispatch({ type: DISPLAY_ALERT, payload: msg });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 2500);
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("isCars", true);
  };

  const registerUser = (user) => {
    const token = "mockToken";

    dispatch({
      type: REGISTER_USER,
      payload: { user, token },
    });

    addUserToLocalStorage({ user, token });

    clearAlert();
  };

  const loginUser = (user, token) => {
    dispatch({
      type: LOGIN_USER,
      payload: { user, token },
    });

    addUserToLocalStorage({ user, token });

    clearAlert();
  };

  const sortItems = (sortField) => {
    let tempItems = [...state.tableItems];
    let sortType = "desc";

    if (!state.sortType) {
      tempItems = _.orderBy(state.tableItems, sortField, "desc");
    }
    if (state.sortType === "desc") {
      tempItems = _.orderBy(state.tableItems, sortField, "asc");
      sortType = "asc";
    }
    if (state.sortType === "asc") {
      tempItems = _.orderBy(state.tableItems, sortField, "desc");
      sortType = "desc";
    }

    dispatch({
      type: SORT_ITEMS,
      payload: { tempItems, sortType, sortField },
    });
  };

  const filterItems = (filterValue) => {
    let tempItems = [...state.preservedItems];
    const value = state.dropdownValue;

    if (filterValue && value) {
      filterValue = filterValue.toLowerCase();

      tempItems = tempItems.filter((item) =>
        item[value].toLowerCase().startsWith(filterValue)
      );
    }

    dispatch({
      type: FILTER_ITEMS,
      payload: tempItems,
    });
  };

  const setEditItem = (id) => {
    let itemToEdit = {};
    let shouldEdit = true;

    if (id) {
      itemToEdit = state.tableItems.find((item) => item.id === id);
    } else {
      itemToEdit = {
        id: "",
        make: "",
        vin: "",
        plate_number: "",
        cost: "",
        photo: "",
      };
      shouldEdit = false;
    }

    dispatch({
      type: SET_EDIT_ITEM,
      payload: { itemToEdit, shouldEdit },
    });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const removeItem = (id) => {
    const filteredItems = state.tableItems.filter((item) => item.id !== id);

    dispatch({
      type: REMOVE_ITEM,
      payload: filteredItems,
    });
  };

  const setDropdownValue = (value) => {
    dispatch({
      type: SET_DROPDOWN_VALUE,
      payload: value,
    });
  };

  const replaceItem = (itemToReplace) => {
    const tempItems = [...state.tableItems];
    const index = state.tableItems.findIndex(
      (item) => item.id === state.editItem.id
    );

    tempItems[index] = itemToReplace;

    dispatch({
      type: REPLACE_ITEM,
      payload: tempItems,
    });
  };

  const addItem = (itemToAdd) => {
    const tempItems = [...state.tableItems];
    const newItem = {
      ...itemToAdd,
      id: new Date().getTime().toString(),
    };

    tempItems.unshift(newItem);

    dispatch({
      type: ADD_ITEM,
      payload: tempItems,
    });
  };

  const hideLogout = () => {
    dispatch({ type: SET_IS_CARS });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        sortItems,
        filterItems,
        setEditItem,
        closeModal,
        removeItem,
        setDropdownValue,
        replaceItem,
        addItem,
        fetchAllCars,
        hideLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
