import React, { useState, useContext } from "react";
import axios from "axios";

// Context
import { GifsContext } from "../../../store/GifsProvider";
import { AuthContext } from "../../../store/AuthProvider";

// Styles
import { SButton } from "../../../appStyles";
import {
  SGifsFlexContainer,
  SGifsListContainer,
  SGifContainer,
  SSaveButton,
} from "./styles";

export default function GifsResult({ reqStatus, query, select }) {
  const { gifs, setGifs } = useContext(GifsContext);
  const { isAuth, user } = useContext(AuthContext);
  const [fetchedIncrementer, setFetchedIncrementer] = useState(2);

  function saveGif(item) {
    let isGifRepeated = false;
    const handleAjaxRequest = () => {
      user.gifs.map((gif) => {
        if (item.id === gif.id) {
          console.log("Gif already saved");
          isGifRepeated = true;
        }
      });

      if (isGifRepeated === false) {
        axios({
          method: "post",
          url: `http://localhost:5000/savegif/${user._id}`,
          data: item,
        });
      }
    };
    handleAjaxRequest();
    console.log(item);
  }

  let incrementer = fetchedIncrementer;

  function showMoreGifs() {
    try {
      incrementer++;
      setFetchedIncrementer(incrementer);
      const handleAjaxRequest = async () => {
        let response = await axios({
          method: "post",
          url: "http://localhost:5000/results/",
          data: { query, select, fetchedIncrementer },
        });
        setGifs([...response.data.data]);
      };
      handleAjaxRequest();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <SGifsFlexContainer>
      <SGifsListContainer>
        {gifs.map((item) => {
          return (
            <SGifContainer key={item.id} onHover>
              <img src={item.images.fixed_height.url} alt={item.title} />
              {isAuth && (
                <SSaveButton onClick={() => saveGif(item)}>Save</SSaveButton>
              )}
            </SGifContainer>
          );
        })}
      </SGifsListContainer>
      {reqStatus && <SButton onClick={showMoreGifs}>Show more</SButton>}
    </SGifsFlexContainer>
  );
}
