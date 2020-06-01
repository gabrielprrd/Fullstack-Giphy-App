import React from "react";

import { SFooter } from "./styles";

export default function Footer() {
  return (
    <SFooter>
      <p>
        Developed with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by <a href="https://github.com/gabrielprrd">Gabriel Afonso</a>
      </p>
    </SFooter>
  );
}
