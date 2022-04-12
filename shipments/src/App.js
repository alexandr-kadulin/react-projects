import React, { useEffect } from "react";
import Modal from "./components/Modal";
import Table from "./components/Table";
import { useSelector, useDispatch } from "react-redux";
import { getTableItems } from "./features/table/tableSlice";

const App = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.table);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(getTableItems());
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <section className="loading-container">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Table />
    </main>
  );
};

export default App;
