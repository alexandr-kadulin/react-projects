import React, { useState, useEffect } from "react";
import { MdCreateNewFolder } from "react-icons/md";
import { RiFileSearchFill, RiCheckboxFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setEditItem, filterItems } from "../features/table/tableSlice";
import { openModal } from "../features/modal/modalSlice";
import Dropdown from "./Dropdown";

const Controls = () => {
  const dispatch = useDispatch();
  const { dropdownValue } = useSelector((store) => store.table);

  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    dispatch(filterItems(filterValue));
    // eslint-disable-next-line
  }, [filterValue]);

  return (
    <section className="controls-center">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="form-input"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
        {dropdownValue ? (
          <RiCheckboxFill className="form-icon" />
        ) : (
          <RiFileSearchFill className="form-icon" />
        )}
        <Dropdown />
      </form>
      <button
        type="button"
        className="btn create-btn"
        onClick={() => {
          dispatch(openModal());
          dispatch(setEditItem());
        }}
      >
        <MdCreateNewFolder className="create-icon" />
      </button>
    </section>
  );
};

export default Controls;
