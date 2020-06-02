import styled from "styled-components";
import { device } from "../../assets/globalStyles/device";

export const SHeader = styled.header`
  background: var(--primary-color);
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  z-index: 10;
`;

export const SLogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    max-height: 40px;
    margin-right: 10px;
  }
`;

export const SNav = styled.nav`
  display: flex;

  a {
    color: white;
    text-decoration: none;
    margin-right: 10px;
    cursor: pointer;
  }

  @media ${device.tablet} {
    line-height: normal;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    background: var(--primary-color);
    transition: 0.4s;
    right: ${(props) => (props.isMenuClicked ? "0" : "100%")};

    a {
      padding: 30px;
      font-size: 2em;
    }
  }
`;

export const SBurgerMenu = styled.div`
  display: none;
  z-index: 99;
  cursor: pointer;

  @media ${device.tablet} {
    display: inline-block;
  }
`;

export const SBar = styled.div`
  width: 35px;
  height: 5px;
  background-color: var(--tertiary-color);
  margin: 6px 0;
  transition: 0.4s;
  transform: ${(props) =>
    props.isMenuClicked ? "rotate(-45deg) translate(-9px, 6px)" : "none"};
`;

export const SBar2 = styled(SBar)`
  transform: none;
  opacity: ${(props) => (props.isMenuClicked ? 0 : 1)};
`;

export const SBar3 = styled(SBar)`
  transform: ${(props) =>
    props.isMenuClicked ? "rotate(45deg) translate(-8px, -8px)" : "none"};
`;
