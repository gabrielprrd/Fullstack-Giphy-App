import React from "react";

import { SFooter } from "./styles";

export default function Footer() {
  return (
    <SFooter>
      <div>
        <p>
          Developed with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
        </p>
      </div>
      <div>
        <p>
          {" "}
          by <a href="https://github.com/gabrielprrd">Gabriel Afonso</a>
        </p>
      </div>
    </SFooter>
  );
}
