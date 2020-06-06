import React, { useContext } from "react";

// Styles
import {
  SContainer,
  SGifsFlexContainer,
  SGifsListContainer,
} from "../../assets/globalStyles/appStyles";

import { SUserGifContainer } from "./styles";

// Context
import { AuthContext } from "../../store/AuthProvider";

export default function User() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <SContainer>
      <SGifsFlexContainer>
        <h1>Welcome, {user.name}!</h1>
        <p>Here are the gifs you saved</p>
        <SGifsListContainer>
          {user.gifs.map((item) => {
            return (
              <SUserGifContainer key={item.id}>
                <img src={item.images.fixed_height.url} alt={item.title} />
              </SUserGifContainer>
            );
          })}
        </SGifsListContainer>
      </SGifsFlexContainer>
    </SContainer>
  );
}
