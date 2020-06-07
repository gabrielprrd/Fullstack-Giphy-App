import styled, { createGlobalStyle } from "styled-components";
import { Form } from "@unform/web";
import { device } from "./device";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;

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

export const AppContainer = styled.div`
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  color: var(--tertiary-color);
  background: var(--primary-color);
`;

export const SContainer = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SGifsFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
`;

export const SGifsListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-content: center;
  margin: 40px 0px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    margin-top: 60px;
  }
`;

export const SInnerFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
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
