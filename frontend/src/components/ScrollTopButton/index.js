import React, { useState } from "react";
import { ScrollTopBtn } from "./styles";
import Arrow from "../../assets/images/arrow.svg";

export default function ScrollTopButton() {
  const [showScroll, setShowScroll] = useState(false);

  function checkScrollTop() {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  }

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.addEventListener("scroll", checkScrollTop);

  return (
    <ScrollTopBtn onClick={scrollTop} showScroll={showScroll}>
      <img src={Arrow} alt="Scroll back to top" />
    </ScrollTopBtn>
  );
}
