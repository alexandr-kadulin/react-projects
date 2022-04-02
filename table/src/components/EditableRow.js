import React from "react";

const EditableRow = ({ editFormData, handleEditFormChange, handleCancel }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="fullName"
          value={editFormData.fullName}
          required
          placeholder="Enter a name..."
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          value={editFormData.address}
          required
          placeholder="Enter an address..."
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          value={editFormData.phoneNumber}
          required
          placeholder="Enter a phone number..."
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          value={editFormData.email}
          required
          placeholder="Enter an email..."
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
