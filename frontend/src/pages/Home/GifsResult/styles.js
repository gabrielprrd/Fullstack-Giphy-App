import styled from "styled-components";
import { device } from "../../../assets/globalStyles/device";
import { SButton } from "../../../appStyles";

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
  margin-bottom: 40px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    margin-top: 60px;
  }
`;

export const SGifContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.7em;
  margin-bottom: 20px;

  &:hover {
    button {
      transition: var(--ghost-transition-time);
      display: block;
    }
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    margin-top: 60px;
    padding: 0.2em;
  }

  img {
    max-width: 100%;
    margin-bottom: 5px;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const SSaveButton = styled(SButton)`
  position: absolute;
  display: none;
  transition: var(--ghost-transition-time);
`;
