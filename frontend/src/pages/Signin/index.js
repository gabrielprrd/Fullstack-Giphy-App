import React, { useRef } from "react";
import { NavLink, useHistory } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

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

      // Sends data to backend
      const handleRegistration = (data) => {
        axios({
          method: "post",
          url: "http://localhost:5000/auth/register/",
          data: data,
        });
      };
      await handleRegistration(data);

      // Sends a welcome email to the user after registration
      const sendWelcomeEmail = (data) => {
        axios({
          method: "post",
          url: "http://localhost:5000/welcome_email",
          data: data,
        });
      };
      await sendWelcomeEmail(data);

      // Tells registration was successfull
      const showModal = () => {
        Swal.fire({
          icon: "success",
          title: "Registration complete!",
          text: "Now you can save your favorite gifs",
        });
      };
      await showModal();

      // Sends user to home page and refresh it after signin after 3 seconds
      await setTimeout(() => {
        history.push("/");
        window.location.reload();
      }, 5000);
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
