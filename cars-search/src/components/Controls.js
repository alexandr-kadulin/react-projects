import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { MdCreateNewFolder } from "react-icons/md";
import { RiFileSearchFill, RiCheckboxFill } from "react-icons/ri";
import { Dropdown } from ".";
import {
  Button,
  ControlsWrapper,
  ControlsForm,
  Input,
} from "../styledComponents";

const Controls = () => {
  const { dropdownValue, filterItems, setEditItem } = useAppContext();

  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    filterItems(filterValue);
    // eslint-disable-next-line
  }, [filterValue]);

  return (
    <ControlsWrapper>
      <ControlsForm onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
        {dropdownValue ? (
          <RiCheckboxFill size={65} color="#75c9fa" />
        ) : (
          <RiFileSearchFill size={65} color="#75c9fa" />
        )}
        <Dropdown setFilterValue={setFilterValue} />
      </ControlsForm>
      <Button
        onClick={() => {
          setEditItem();
        }}
      >
        <MdCreateNewFolder size={30} />
      </Button>
    </ControlsWrapper>
  );
};

export default Controls;
