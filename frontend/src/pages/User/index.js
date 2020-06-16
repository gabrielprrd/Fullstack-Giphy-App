import React, { useContext, useEffect } from "react";
import axios from "axios";

// Styles
import {
  SContainer,
  SGifsFlexContainer,
  SGifsListContainer,
} from "../../assets/globalStyles/containers";
import { SUserGifContainer, SDeleteButton } from "./styles";

// Context
import { AuthContext } from "../../store/AuthProvider";

export default function User() {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchFromServer = async () => {
      let email = user.email;
      const response = await axios({
        method: "POST",
        url: "http://localhost:5000/auth/updatesavedgifs/",
        data: { email },
      });
      await setUser(response.data.user);
    };
    fetchFromServer();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function removeGif(item) {
    axios({
      method: "post",
      url: `http://localhost:5000/deletegif/${user._id}`,
      data: item,
    });

    // setIsDeleted(true);
    const filteredState = user.gifs.filter((gif) => gif.id !== item.id);
    let updatedUser = { ...user };
    updatedUser.gifs = filteredState;
    setUser(updatedUser);
  }

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
                <SDeleteButton onClick={() => removeGif(item)}>
                  Delete
                </SDeleteButton>
              </SUserGifContainer>
            );
          })}
        </SGifsListContainer>
      </SGifsFlexContainer>
    </SContainer>
  );
}
