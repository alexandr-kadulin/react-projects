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

const reducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload || "Please provide all values",
      };

    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertText: "",
      };

    case REGISTER_USER:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        showAlert: true,
        isCars: true,
        alertType: "success",
        alertText: "User created. Redirecting...",
      };

    case LOGIN_USER:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        showAlert: true,
        isCars: true,
        alertType: "success",
        alertText: "Login successful. Redirecting...",
      };

    case SORT_ITEMS:
      return {
        ...state,
        tableItems: action.payload.tempItems,
        sortType: action.payload.sortType,
        sortField: action.payload.sortField,
      };

    case FILTER_ITEMS:
      return {
        ...state,
        tableItems: action.payload,
      };

    case SET_EDIT_ITEM:
      return {
        ...state,
        editItem: action.payload.itemToEdit,
        isEdit: action.payload.shouldEdit,
        isOpen: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };

    case REMOVE_ITEM:
      return {
        ...state,
        tableItems: action.payload,
      };

    case SET_DROPDOWN_VALUE:
      return {
        ...state,
        dropdownValue: action.payload,
      };

    case REPLACE_ITEM:
      return {
        ...state,
        tableItems: action.payload,
      };

    case ADD_ITEM:
      return {
        ...state,
        tableItems: action.payload,
      };

    case FETCH_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        tableItems: [],
        preservedItems: [],
        error: action.payload || "Something went wrong",
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tableItems: action.payload,
        preservedItems: action.payload,
        error: "",
      };

    case SET_IS_CARS:
      return {
        ...state,
        isCars: false,
      };

    default:
      throw new Error(`no such action : ${action.type}`);
  }
};

export default reducer;
