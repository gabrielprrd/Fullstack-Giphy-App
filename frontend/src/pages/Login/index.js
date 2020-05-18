import React, { useRef } from "react";
import { Form } from "@unform/web";
import * as Yup from "yup";
import axios from "axios";

import Input from "../../components/Form/Input";

export default function Login() {
  const formRef = useRef(null);

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
      const handleAuthentication = (data) => {
        axios({
          method: "post",
          url: "http://localhost:5000/auth/authenticate/",
          data: data,
        });
      };
      handleAuthentication(data);

      // If every input is valid, cleans the error messages and input fields
      formRef.current.setErrors({});
      reset();
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
    <div className="page-container">
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input type="email" name="email" />
        <Input type="password" name="password" />

        <button type="submit">Log in</button>
      </Form>
    </div>
  );
}
