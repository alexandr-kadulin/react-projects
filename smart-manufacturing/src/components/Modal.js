import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { replaceItem, addItem } from "../features/table/tableSlice";
import { closeModal, toggleError } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const { tableItems, editItem, isEdit } = useSelector((store) => store.table);
  const { isError } = useSelector((store) => store.modal);
  const keys = Object.keys(tableItems[0]).filter((key) => key !== "id");

  const [details, setDetails] = useState(editItem);

  const handleInput = (e, key) => {
    const newDetails = { ...details };
    newDetails[key] = e.target.value;
    setDetails(newDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isEmptyValue = false;

    for (const key in details) {
      if (key !== "id") {
        if (!details[key]) {
          isEmptyValue = true;
        }
      }
    }

    if (isEmptyValue === false) {
      if (isEdit) {
        dispatch(replaceItem(details));
        dispatch(closeModal());
      } else {
        dispatch(addItem(details));
        dispatch(closeModal());
      }
    } else {
      dispatch(toggleError());
      setTimeout(() => {
        dispatch(toggleError());
      }, 3000);
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-container")) {
      dispatch(closeModal());
    }
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
              execute
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => dispatch(closeModal())}
            >
              cancel
            </button>
          </div>
          {isError && (
            <div className="modal-alert">
              <small>Can't submit empty value</small>
            </div>
          )}
        </form>
      </div>
    </article>
  );
};

export default Modal;
