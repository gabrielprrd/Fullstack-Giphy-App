import styled from "styled-components";

export const SGhostForm = styled.div`
  /* Color variables */
  --ghost-color: white;
  --ghost-color-focus: white;
  animation: floating 4s ease alternate infinite running;
  position: relative;

  form {
    position: absolute;
    display: flex;
    justify-content: center;
    top: 50%;
    left: 0;
    right: 0;

    input {
      border: none;
      border-radius: 5px;
      background: #303960;
      padding: 1em;
      color: white;
      font-weight: 700;
      font-size: 1.3em;
      transition: .3s all linear;
      }

      select {
      border: none;
      background: #303960;
      color: white;
      font-weight: 700;
      font-size: 1.3em;
    }

    button {
      padding: 0 10px;
    }
    }
  }
`;

export const SGhostBody = styled.div`
  position: relative;
  height: 250px;
  width: 150px;
  background: var(--ghost-color);
  border-radius: 100px 100px 10px 10px;

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
    background: var(--ghost-color);
    box-shadow: 0px 6px 5px black;
    border-radius: 50px;
    transform: rotate(-30deg);
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
    background: var(--ghost-color);
    box-shadow: 0px 6px 5px black;
    border-radius: 50px;
    transform: rotate(30deg);
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
      background: #553c8b;
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
      background: #553c8b;
    }

    .mouth {
      position: absolute;
      height: 18px;
      width: 35px;
      border: 8px solid #553c8b;
      border-bottom-left-radius: 100px;
      border-bottom-right-radius: 100px;
      border-top: 0;
      top: 85px;
      left: 57px;
    }
  }

  @keyframes floating {
    0% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(-5px);
    }
  }
`;
