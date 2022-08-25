import React, { useState } from "react";
import { useAppContext } from "../context/appContext";
import { Alert, FormRow } from ".";
import {
  Button,
  SubmitButton,
  ButtonsContainer,
  ModalContainer,
  Form,
  ModalWrapper,
} from "../styledComponents";

const Modal = () => {
  const {
    editItem,
    isEdit,
    replaceItem,
    closeModal,
    addItem,
    displayAlert,
    showAlert,
  } = useAppContext();

  const [details, setDetails] = useState(editItem);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
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
        replaceItem(details);
        closeModal();
      } else {
        addItem(details);
        closeModal();
      }
    } else {
      displayAlert("Can't submit empty value");
    }
  };

  return (
    <ModalContainer>
      <ModalWrapper>
        <h4>cars details</h4>
        <Form>
          <FormRow
            type="text"
            name="make"
            value={details.make}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="vin"
            value={details.vin}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="plate_number"
            value={details.plate_number}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="cost"
            value={details.cost}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="photo"
            value={details.photo}
            handleChange={handleChange}
          />
          <ButtonsContainer>
            <SubmitButton onClick={handleSubmit}>execute</SubmitButton>
            <Button onClick={closeModal}>cancel</Button>
          </ButtonsContainer>
          {showAlert && <Alert />}
        </Form>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default Modal;
