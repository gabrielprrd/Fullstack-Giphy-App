import React, { useRef } from "react";
import { NavLink, useHistory } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

// Components
import Input from "../../components/Form/Input";

// Styles
import {
  SContainer,
  SButton,
  SLabel,
  SForm,
  SInnerFormContainer,
  SLoginSigninSuggestion
} from "../../assets/globalStyles/appStyles";

export default function Signin() {
  const formRef = useRef(null);
  const history = useHistory();

  async function handleSubmit(data) {
    try {
      // Form validation
      const schema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
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
      const handleRegistration = (data) => {
        axios({
          method: "post",
          url: "http://localhost:5000/auth/register/",
          data: data,
        });
      };
      await handleRegistration(data);

      // Sends user to home page and refresh it after signin
      await history.push("/");
      await window.location.reload();
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
  return (
    <SContainer>
      <SForm ref={formRef} onSubmit={handleSubmit}>
        <SInnerFormContainer>
          <SLabel htmlFor="name">Name:</SLabel>
          <Input name="name" />
        </SInnerFormContainer>

        <SInnerFormContainer>
          <SLabel htmlFor="email">Email:</SLabel>
          <Input type="email" name="email" />
        </SInnerFormContainer>

        <SInnerFormContainer>
          <SLabel htmlFor="password">Password:</SLabel>
          <Input type="password" name="password" />
        </SInnerFormContainer>

        <SButton type="submit">Sign in</SButton>
      </SForm>

      <SLoginSigninSuggestion>
        Or <NavLink to="/login">login</NavLink> if you already have an account.
      </SLoginSigninSuggestion>
    </SContainer>
  );
}
