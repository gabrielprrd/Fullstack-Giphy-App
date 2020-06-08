import React, { useRef, useContext } from "react";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

// Context
import { AuthContext } from "../../store/AuthProvider";

// Components
import Input from "../../components/Form/Input";

// Styles
import {
  SButton,
  SLabel,
  SForm,
  SLoginSigninSuggestion,
} from "../../assets/globalStyles/globalStyles";
import {
  SContainer,
  SInnerFormContainer,
} from "../../assets/globalStyles/containers";

export default function Login(props) {
  const { from } = props.location.state || { from: { pathname: "/" } };
  const formRef = useRef(null);
  const { isAuth } = useContext(AuthContext);
  const history = useHistory();

  async function handleSubmit(data, { reset }) {
    try {
      // Form validation
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Type a valid email")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Minimum of 6 characters")
          .required("Password is required"),
      });

      // Validates the whole schema at once, showing multiple errors when necessary
      await schema.validate(data, {
        abortEarly: false,
      });

      // Sends data to backend as a post request
      const handleAuthentication = async (data) => {
        axios({
          method: "post",
          url: "http://localhost:5000/auth/authenticate/",
          data: data,
        });
        // Sends user to home page and refresh it after login
        await history.push("/");
        await window.location.reload();
      };
      handleAuthentication(data);

      // If every input is valid, cleans the error messages and input fields
      formRef.current.setErrors({});
      reset();

      // If user is not authorized, redirects to login page
      if (isAuth === false) {
        return <Redirect to={from} />;
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  // Only shows the form if user is logged out
  return (
    <SContainer>
      {isAuth ? (
        <h1>Welcome! You're already logged in</h1>
      ) : (
        <SContainer>
          <SForm ref={formRef} onSubmit={handleSubmit}>
            <SInnerFormContainer>
              <SLabel htmlFor="email">Email:</SLabel>
              <Input type="email" name="email" />
            </SInnerFormContainer>
            <SInnerFormContainer>
              <SLabel htmlFor="password">Password:</SLabel>
              <Input type="password" name="password" />
            </SInnerFormContainer>
            <SButton type="submit">Log in</SButton>
          </SForm>
          <SLoginSigninSuggestion>
            Don't have an account? <NavLink to="/signin">Signin</NavLink>
          </SLoginSigninSuggestion>
        </SContainer>
      )}
    </SContainer>
  );
}
