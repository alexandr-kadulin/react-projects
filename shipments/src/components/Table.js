import React from "react";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { sortItems } from "../features/table/tableSlice";
import { useDispatch } from "react-redux";
import Row from "./Row";

const Table = () => {
  const dispatch = useDispatch();
  let { tableItems, sortType, sortField } = useSelector((store) => store.table);
  const keys = Object.keys(tableItems[0]);

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
    <section>
      <table>
        <thead>
          <tr>
            {keys.map((key, index) => {
              return (
                <th key={index + key} onClick={() => dispatch(sortItems(key))}>
                  <div className="table-header">
                    {key}
                    {renderIcons(sortField, key, sortType)}
                  </div>
                </th>
              );
            })}
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {tableItems.map((item, index) => {
            return <Row item={item} key={index + item.orderNo} />;
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
