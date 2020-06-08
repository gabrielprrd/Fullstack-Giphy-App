import styled, { createGlobalStyle } from "styled-components";
import { Form } from "@unform/web";

export const GlobalStyle = createGlobalStyle`
  * {
    /* reset */
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;

    /* variables */
    --primary-color: #553c8b;
    --secondary-color: #303960;
    --tertiary-color: #ffffff;
    --ghost-transition-time: 0.3s;
  }

  html, body {
    height: 100vh;
    width: 100%;
    font-family: 'Roboto', sans-serif;
  }

  input {
    border-radius: 3px;
    padding: 10px;
    font-size: 1.1em;
  }
`;

export const SButton = styled.button`
  text-decoration: none;
  border: 4px solid var(--tertiary-color);
  border-radius: 5px;
  font-size: 1em;
  padding: 0.5em 3em;
  transition: all 0.2s;
  background: var(--secondary-color);
  color: var(--tertiary-color);
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 4px 8px var(--secondary-color);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: none;
  }
`;

export const SLabel = styled.label`
  font-size: 1.5em;
`;

export const SForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const SLoginSigninSuggestion = styled.p`
  margin-top: 20px;

  a {
    color: var(--tertiary-color);
  }
`;
