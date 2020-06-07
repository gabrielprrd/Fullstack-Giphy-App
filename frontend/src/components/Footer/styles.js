import styled from "styled-components";
import { device } from "../../assets/globalStyles/device";

export const SFooter = styled.footer`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  background: linear-gradient(var(--primary-color), var(--secondary-color));
  padding: 20px;

  a {
    color: var(--tertiary-color);
  }

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;
