import { nanoid } from "nanoid";
import React, { useState } from "react";
import EditableRow from "./components/EditableRow";
import ReadOnlyRow from "./components/ReadOnlyRow";
import data from "./mock-data.json";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [contactID, setContactID] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...formData };
    newFormData[fieldName] = fieldValue;

    setFormData(newFormData);
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { fullName, address, phoneNumber, email } = formData;
    const newContact = {
      id: nanoid(),
      fullName,
      address,
      phoneNumber,
      email,
    };
    const newContacts = [...contacts, newContact];

    setContacts(newContacts);
    setFormData({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
    });
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    const { fullName, address, phoneNumber, email } = editFormData;
    const editedContact = {
      id: contactID,
      fullName,
      address,
      phoneNumber,
      email,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactID);
    newContacts[index] = editedContact;

    setContacts(newContacts);
    setContactID(null);
  };

  const handleEdit = (e, contact) => {
    e.preventDefault();
    const { id, fullName, address, phoneNumber, email } = contact;
    setContactID(id);
    const formValues = {
      fullName,
      address,
      phoneNumber,
      email,
    };

    setEditFormData(formValues);
  };

  const handleCancel = () => {
    setContactID(null);
  };

  const handleDelete = (id) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === id);
    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              const { id } = contact;

              return (
                <React.Fragment key={id}>
                  {contactID === id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancel={handleCancel}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </form>
      <h2>Add a Contact</h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          required
          placeholder="Enter a name..."
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          required
          placeholder="Enter an address..."
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          required
          placeholder="Enter a phone number..."
          onChange={handleFormChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          required
          placeholder="Enter an email..."
          onChange={handleFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
