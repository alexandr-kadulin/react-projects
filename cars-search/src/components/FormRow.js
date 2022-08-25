import { FormRowInput, Label } from "../styledComponents";

const FormRow = ({ type, name, value, labelText, handleChange }) => {
  return (
    <>
      <Label htmlFor={name}>{labelText || name}</Label>
      <FormRowInput
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </>
  );
};

export default FormRow;
