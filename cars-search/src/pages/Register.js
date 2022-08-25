import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import { FormRow, Alert } from "../components";
import {
  Form,
  MemberButton,
  RegisterWrapper,
  SubmitButton,
} from "../styledComponents";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Register = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);

  const {
    user,
    token,
    isLoading,
    displayAlert,
    showAlert,
    registerUser,
    loginUser,
    hideLogout,
  } = useAppContext();

  useEffect(() => {
    hideLogout();
    // eslint-disable-next-line
  }, []);

  const toggleMember = () => {
    setValues({ ...initialState, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };

    if (isMember) {
      if (!user || !token) {
        displayAlert("No such user");
        return;
      }
      if (user.email !== email || user.password !== password) {
        displayAlert("Invalid credentials");
      } else {
        loginUser(user, token);

        setTimeout(() => {
          navigate("/cars");
        }, 2500);
      }
    } else {
      registerUser(currentUser);

      setTimeout(() => {
        navigate("/cars");
      }, 2500);
    }
  };

  return (
    <RegisterWrapper>
      <Form register onSubmit={handleSubmit}>
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <SubmitButton register disabled={isLoading}>
          submit
        </SubmitButton>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <MemberButton onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </MemberButton>
        </p>
      </Form>
    </RegisterWrapper>
  );
};

export default Register;
