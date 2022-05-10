import React from "react";
import Modal from "./components/Modal";
import Table from "./components/Table";
import { useSelector } from "react-redux";

const App = () => {
  const { isOpen } = useSelector((store) => store.modal);

  return (
    <main>
      {isOpen && <Modal />}
      <Table />
    </main>
  );
};

export default App;
