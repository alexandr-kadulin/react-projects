import React from "react";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { sortItems } from "../features/table/tableSlice";
import Row from "./Row";
import Controls from "./Controls";

const Table = () => {
  const dispatch = useDispatch();
  const { tableItems, sortType, sortField } = useSelector(
    (store) => store.table
  );

  const getKeys = () => {
    const keys = Object.keys(tableItems[0]).filter((key) => key !== "id");

    return keys.map((key, index) => {
      return (
        <th key={index + key} onClick={() => dispatch(sortItems(key))}>
          <div className="table-header">
            {key}
            {renderIcons(sortField, key, sortType)}
          </div>
        </th>
      );
    });
  };

  const renderIcons = (sortField, key, sortType) => {
    return (
      <>
        {sortField === key ? (
          <>{sortType === "desc" ? <FaSortUp /> : <FaSortDown />}</>
        ) : (
          <FaSort />
        )}
      </>
    );
  };

  return (
    <section className="table">
      <Controls />
      {tableItems.length > 0 ? (
        <table>
          <thead>
            <tr>
              {getKeys()}
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {tableItems.map((item) => {
              return <Row item={item} key={item.id} />;
            })}
          </tbody>
        </table>
      ) : (
        <h2>Sorry, no values matched your search...</h2>
      )}
    </section>
  );
};

export default Table;
