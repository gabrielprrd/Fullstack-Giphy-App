import styled from "styled-components";
import Input from "../../components/Form/Input";
import { Form } from "@unform/web";
import { SButton } from "../../appStyles";
import { device } from "../../assets/globalStyles/device";

export const SGhostForm = styled.div`
  animation: floating 4s ease alternate infinite running;
  position: relative;
  margin-top: 20px;

  @media ${device.tablet} {
    width: 90vw;
    display: flex;
    justify-content: center;
  }

  @keyframes floating {
    0% {
      transform: translateY(8px);
    }
    100% {
      transform: translateY(-8px);
    }
  }
`;

export const SGhostButton = styled(SButton)`
  padding: 0 10px;
  background: ${({ isfocused }) =>
    isfocused ? "var(--tertiary-color)" : "var(--secondary-color)"};
  color: ${({ isfocused }) =>
    isfocused ? "var(--secondary-color)" : "var(--tertiary-color)"};

  @media ${device.tablet} {
    width: 80vw;
    padding: 1em;
  }
`;

export const SForm = styled(Form)`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 50%;
  left: 0;
  right: 0;

  @media ${device.tablet} {
    flex-direction: column;
    width: 90vw;
    align-items: center;
  }
`;

export const SSelect = styled.select`
  border: none;
  border-radius: 5px;
  background: ${({ isfocused }) =>
    isfocused ? "var(--tertiary-color)" : "var(--secondary-color)"};
  color: ${({ isfocused }) =>
    isfocused ? "var(--secondary-color)" : "var(--tertiary-color)"};
  font-weight: 700;
  font-size: 1.3em;
  transition: var(--ghost-transition-time);

  @media ${device.tablet} {
    width: 80vw;
    margin-bottom: 5px;
    }
  }
`;

export const SInput = styled(Input)`
  border: none;
  border-radius: 5px;
  margin-bottom: 0;
  padding: 1em;
  background: ${({ isfocused }) =>
    isfocused ? "var(--tertiary-color)" : "var(--secondary-color)"};
  color: ${({ isfocused }) =>
    isfocused ? "var(--secondary-color)" : "var(--tertiary-color)"};
  font-weight: 700;
  font-size: 1.3em;
  transition: var(--ghost-transition-time);

  @media ${device.tablet} {
    width: 80vw;
    margin-bottom: 5px;
  }
`;

export const SGhostBody = styled.div`
  position: relative;
  height: 250px;
  width: 150px;
  background: ${({ isfocused }) =>
    isfocused ? "var(--secondary-color)" : "var(--tertiary-color)"};
  border-radius: ${({ isfocused }) =>
    isfocused ? "100px 100px 10px 80px" : "100px 100px 10px 10px"};
  transition: var(--ghost-transition-time);

  @media ${device.tablet} {
    right: 0;
    top: 0;
  }

  /* hands */
  &::before {
    content: "";
    display: block;
    position: absolute;
    height: 50px;
    width: 30px;
    top: 105px;
    left: 10px;
    z-index: 99;
    background: ${({ isfocused }) =>
      isfocused ? "var(--secondary-color)" : "var(--tertiary-color)"};
    box-shadow: 0px 6px 5px black;
    border-radius: 50px;
    transform: rotate(-30deg);
    opacity: ${({ isfocused }) => (isfocused ? "0.5" : "1")};
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 50px;
    width: 30px;
    top: 105px;
    right: 10px;
    z-index: 99;
    background: ${({ isfocused }) =>
      isfocused ? "var(--secondary-color)" : "var(--tertiary-color)"};
    box-shadow: 0px 6px 5px black;
    border-radius: 50px;
    transform: rotate(30deg);
    opacity: ${({ isfocused }) => (isfocused ? "0.5" : "1")};
  }

  .face {
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 60px;
      left: 30px;
      height: 25px;
      width: 25px;
      border-radius: 100%;
      background: ${({ isfocused }) =>
        isfocused ? "var(--tertiary-color)" : "var(--primary-color)"};
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 60px;
      right: 30px;
      height: 25px;
      width: 25px;
      border-radius: 100%;
      background: ${({ isfocused }) =>
        isfocused ? "var(--tertiary-color)" : "var(--primary-color)"};
    }

    .mouth {
      position: absolute;
      height: 18px;
      width: 35px;
      border: 8px solid
        ${({ isfocused }) =>
          isfocused ? "var(--tertiary-color)" : "var(--primary-color)"};
      border-bottom-left-radius: 100px;
      border-bottom-right-radius: 100px;
      border-top: 0;
      top: 85px;
      left: 57px;
    }
  }
`;
