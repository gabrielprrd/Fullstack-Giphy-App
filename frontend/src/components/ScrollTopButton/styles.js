import styled from "styled-components";

export const ScrollTopBtn = styled.div`
  display: ${({ showScroll }) => (showScroll ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 40px;
  bottom: 40px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: var(--secondary-color);
  color: var(--tertiary-color);
  transition: var(--ghost-transition-time);
  cursor: pointer;
  z-index: 99;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 4px 8px var(--secondary-color);
  }

  img {
    height: 60%;
    transform: rotate(-90deg);
  }
`;
