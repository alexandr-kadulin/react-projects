import React from "react";
import { useAppContext } from "../context/appContext";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { Controls, Loading, Row, Modal } from ".";
import { TableHeader, TableWrapper } from "../styledComponents";

const Table = () => {
  const {
    tableItems,
    sortType,
    sortField,
    sortItems,
    isLoading,
    isOpen,
    error,
  } = useAppContext();

  const getKeys = () => {
    const keys = Object.keys(tableItems[0]).filter((key) => key !== "id");

    return keys.map((key, index) => {
      return (
        <th key={`${index} + ${key}`} onClick={() => sortItems(key)}>
          <TableHeader>
            {key}
            {renderIcons(sortField, key, sortType)}
          </TableHeader>
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
    <>
      {isOpen && <Modal />}
      {isLoading ? (
        <Loading />
      ) : (
        <TableWrapper>
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
            <>
              <h2>Sorry, no values matched your search...</h2>
              {error && <h2>{error}</h2>}
            </>
          )}
        </TableWrapper>
      )}
    </>
  );
};

export default Table;
