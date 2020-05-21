import React, { useState, useRef, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Form } from "@unform/web";
import * as Yup from "yup";
import axios from "axios";

import { AuthContext } from "../../store/AuthProvider";
import Input from "../../components/Form/Input";

export default function Login(props) {
  const { from } = props.location.state || { from: { pathname: "/" } };
  const formRef = useRef(null);
  const { isAuth } = useContext(AuthContext);

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

  // I need to find a way to redirect the user when he logs in or re-render a component without the need to refresh
  useEffect(() => {
    const refresh = async () => {
      // await window.page.reload(false);
    };
    refresh();
  }, [isAuth]);

  // Only shows the form if user is logged out
  return (
    <div className="page-container">
      {isAuth ? (
        <h1>Welcome! You're already logged in</h1>
      ) : (
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input type="email" name="email" />
          <Input type="password" name="password" />

          <button type="submit">Log in</button>
        </Form>
      )}
    </div>
  );
}
