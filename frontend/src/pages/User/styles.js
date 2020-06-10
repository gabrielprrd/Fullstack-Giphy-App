import styled from "styled-components";
import { device } from "../../assets/globalStyles/device";
import { SButton } from "../../assets/globalStyles/globalStyles";

export const SUserGifContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7em;
  margin-bottom: 20px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    margin-top: 60px;
    padding: 0.2em;
  }

  img {
    max-width: 100%;
    margin-bottom: 5px;
  }

  &:hover {
    button {
      transition: var(--ghost-transition-time);
      display: block;
      z-index: 3;
    }
  }
`;

export const SDeleteButton = styled(SButton)`
  position: absolute;
  display: none;
  transition: var(--ghost-transition-time);
`;
