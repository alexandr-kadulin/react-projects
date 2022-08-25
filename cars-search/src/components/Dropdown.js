import React from "react";
import { useAppContext } from "../context/appContext";
import { Select, MenuItem } from "@mui/material";

const Dropdown = ({ setFilterValue }) => {
  const { dropdownValue, preservedItems, setDropdownValue } = useAppContext();

  const handleSelect = (e) => {
    setDropdownValue(e.target.value);
    setFilterValue("");
  };

  return (
    <Select value={dropdownValue} onChange={handleSelect} displayEmpty>
      <MenuItem value="" disabled>
        Search Field
      </MenuItem>
      {preservedItems[0]
        ? Object.keys(preservedItems[0])
            .filter((key) => key !== "id")
            .map((key, index) => {
              return (
                <MenuItem value={key} key={`${index} + ${key}`}>
                  {key}
                </MenuItem>
              );
            })
        : null}
    </Select>
  );
};

export default Dropdown;
