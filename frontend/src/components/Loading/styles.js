import styled from "styled-components";

export const SLoadingSpinner = styled.div`
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: var(--primary-color);

  @keyframes ldio-z5g5ym4b1c {
    0% {
      top: 94px;
      left: 94px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 17px;
      left: 17px;
      width: 154px;
      height: 154px;
      opacity: 0;
    }
  }

  .ldio-z5g5ym4b1c div {
    position: absolute;
    border-width: 6px;
    border-style: solid;
    opacity: 1;
    border-radius: 50%;
    animation: ldio-z5g5ym4b1c 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  .ldio-z5g5ym4b1c div:nth-child(1) {
    border-color: #ffffff;
  }

  .ldio-z5g5ym4b1c div:nth-child(2) {
    border-color: #f0f5f6;
    animation-delay: -0.5s;
  }

  .ldio-z5g5ym4b1c {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }

  .ldio-z5g5ym4b1c div {
    box-sizing: content-box;
  }
`;
