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
`;

export const SBurgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media only screen and (max-width(${device.mobileL})) {
    display: inline-block;
  }
`;

export const SBar = styled.div`
  width: 35px;
  height: 5px;
  background-color: var(--tertiary-color);
  margin: 6px 0;
  transition: 0.4s;
`;

export const SBar2 = styled(SBar)``;

export const SBar3 = styled(SBar)``;

// .change .bar1 {
//   -webkit-transform: rotate(-45deg) translate(-9px, 6px);
//   transform: rotate(-45deg) translate(-9px, 6px);
// }

// .change .bar2 {opacity: 0;}

// .change .bar3 {
//   -webkit-transform: rotate(45deg) translate(-8px, -8px);
//   transform: rotate(45deg) translate(-8px, -8px);
// }
