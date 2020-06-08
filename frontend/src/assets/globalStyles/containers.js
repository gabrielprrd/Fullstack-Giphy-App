import styled from "styled-components";
import { device } from "./device";

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
  align-items: center;
  justify-content: center;
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

export const ModalContainer = styled.div`
  position: fixed;
  width: 30vw;
  height: 30vh;
  background: var(--tertiary-color);
`;
