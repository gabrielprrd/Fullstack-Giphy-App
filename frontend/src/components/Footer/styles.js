import styled from "styled-components";

export const SFooter = styled.footer`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(var(--primary-color), var(--secondary-color));
  align-items: center;
  padding: 20px;

  a {
    color: var(--tertiary-color);
  }
`;
