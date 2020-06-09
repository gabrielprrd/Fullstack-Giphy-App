import styled from "styled-components";
import { device } from "../../assets/globalStyles/device";

export const SLogoutButton = styled.button`
  border: none;
  background: none;
  color: var(--tertiary-color);
  font-size: 1em;
  cursor: pointer;
  margin-right: 10px;

  @media ${device.tablet} {
    font-size: 2em;
  }
`;
