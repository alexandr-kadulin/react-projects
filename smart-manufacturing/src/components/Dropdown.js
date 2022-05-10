import React from "react";
import { Select, MenuItem } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setDropdownValue } from "../features/table/tableSlice";

const Dropdown = () => {
  const dispatch = useDispatch();
  const { dropdownValue, preservedItems } = useSelector((store) => store.table);

  const handleSelect = (e) => {
    dispatch(setDropdownValue(e.target.value));
  };

  return (
    <Select value={dropdownValue} onChange={handleSelect} displayEmpty>
      <MenuItem value="" disabled>
        Search Field
      </MenuItem>
      {Object.keys(preservedItems[0])
        .filter((key) => key !== "id")
        .map((key, index) => {
          return (
            <MenuItem value={key} key={index + key}>
              {key}
            </MenuItem>
          );
        })}
    </Select>
  );
};

export default Dropdown;
