import styled, { createGlobalStyle } from "styled-components";
import { device } from "./assets/globalStyles/device";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;

    --primary-color: #553c8b;
    --secondary-color: #303960;
    --tertiary-color: #ffffff;
  }

  html, body {
    height: 100vh;
    width: 100%;
    font-family: 'Roboto', sans-serif;
  }
`;

export const AppContainer = styled.div`
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  color: var(--tertiary-color);
`;

export const SContainer = styled.div`
  background: var(--primary-color);
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SButton = styled.button`
  text-decoration: none;
  border: 4px solid white;
  border-radius: 5px;
  font-size: 1em;
  padding: 0.5em 3em;
  transition: all 0.2s;
  background: var(--primary-color);
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
