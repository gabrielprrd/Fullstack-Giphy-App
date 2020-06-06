import styled from "styled-components";
import { device } from "../../../assets/globalStyles/device";
import { SButton } from "../../../assets/globalStyles/appStyles";

export const SGifContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7em;
  margin-bottom: 20px;
  z-index: 2;

  a {
    position: absolute;
    text-decoration: none;
    color: var(--tertiary-color);
    display: none;
    cursor: pointer;
    transition: var(--ghost-transition-time);

    &:hover {
      color: var(--secondary-color);
      font-weight: 700;
    }
  }

  &:hover {
    button {
      transition: var(--ghost-transition-time);
      display: block;
      z-index: 3;
    }

    a {
      display: block;
      z-index: 0;
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
      opacity: 0.9;
    }
  }
`;

export const SNoResultsFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  font-size: 1.5em;
`;

export const SSaveButton = styled(SButton)`
  position: absolute;
  display: none;
  transition: var(--ghost-transition-time);
`;
