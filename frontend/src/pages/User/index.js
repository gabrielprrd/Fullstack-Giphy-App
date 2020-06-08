import React, { useContext, useEffect } from "react";
import axios from "axios";

// Styles
import {
  SContainer,
  SGifsFlexContainer,
  SGifsListContainer,
} from "../../assets/globalStyles/containers";
import { SUserGifContainer } from "./styles";

// Context
import { AuthContext } from "../../store/AuthProvider";

export default function User() {
  const { user, setUser, setAuth } = useContext(AuthContext);

  useEffect(() => {
    const fetchFromServer = async () => {
      try {
        let response = await axios.get(
          "http://localhost:5000/auth/authenticate/"
        );
        let { isAuthenticated, userInfo } = response.data;
        await setUser(userInfo);
        await setAuth(isAuthenticated);
      } catch (err) {
        throw new Error(err);
      }
    };

    fetchFromServer();
  }, []);

  return (
    <SContainer>
      <SGifsFlexContainer>
        <h1>Welcome, {user.name}!</h1>
        {user.gifs.length > 0 ? (
          <p>Here are the gifs you saved</p>
        ) : (
          <p>You still don't have any gif saved</p>
        )}
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
