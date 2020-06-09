import React from "react";
import { SLogoutButton } from "./styles";

export default function LogoutButton({ handleClick, hideNav }) {
  return (
    <SLogoutButton
      onClick={() => {
        handleClick();
        hideNav();
      }}
    >
      Logout
    </SLogoutButton>
  );
}
