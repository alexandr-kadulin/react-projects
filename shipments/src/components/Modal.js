import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { replaceItem } from "../features/table/tableSlice";
import { closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const { tableItems, editItem } = useSelector((store) => store.table);
  const keys = Object.keys(tableItems[0]);

  const [details, setDetails] = useState(editItem);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(replaceItem(details));
    dispatch(closeModal());
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-container")) {
      dispatch(closeModal());
    }
  };

  const handleInput = (e, key) => {
    const newDetails = { ...details };
    newDetails[key] = e.target.value;
    setDetails(newDetails);
  };

  return (
    <article className="modal-container" onClick={(e) => handleOutsideClick(e)}>
      <div className="modal">
        <h4 className="modal-title">shipment details</h4>
        <form className="form">
          <div className="form-center">
            {keys.map((key, index) => {
              return (
                <div className="form-control" key={index + key}>
                  <label htmlFor={key}>{key} : </label>
                  <input
                    type="text"
                    id={key}
                    name={key}
                    value={details[key]}
                    onChange={(e) => handleInput(e, key)}
                  />
                </div>
              );
            })}
          </div>
          <div className="modal-btn-container">
            <button type="submit" className="btn" onClick={handleSubmit}>
              update
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => dispatch(closeModal())}
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};

export default Modal;
