import styled from "styled-components";
import { device } from "../../assets/globalStyles/device";

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
`;
