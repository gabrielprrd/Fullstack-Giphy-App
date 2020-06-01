import styled from "styled-components";

export const SGifsFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SGifsListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-content: center;
`;

export const SGifContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.7em;

  img {
    max-width: 100%;
    margin-bottom: 5px;
  }
`;
