import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

// Context
import { GifsContext } from "../../../store/GifsProvider";
import { AuthContext } from "../../../store/AuthProvider";

// Styles
import { SButton } from "../../../assets/globalStyles/globalStyles";
import {
  SGifsFlexContainer,
  SGifsListContainer,
} from "../../../assets/globalStyles/containers";
import { SGifContainer, SSaveButton, SNoResultsFound } from "./styles";

export default function GifsResult({ reqStatus, query, select }) {
  const { gifs, setGifs } = useContext(GifsContext);
  const { isAuth, user } = useContext(AuthContext);
  const [fetchedIncrementer, setFetchedIncrementer] = useState(2);

  function showGifs() {
    if (gifs.length > 0) {
      return (
        <SGifsListContainer>
          {gifs.map((item) => {
            return (
              <SGifContainer key={item.id}>
                <img src={item.images.fixed_height.url} alt={item.title} />
                {isAuth ? (
                  <SSaveButton onClick={() => saveGif(item)}>
                    Save{" "}
                    <span role="img" aria-label="love">
                      ❤️
                    </span>
                  </SSaveButton>
                ) : (
                  <NavLink to="/login">
                    Login to save your favorite gifs
                  </NavLink>
                )}
              </SGifContainer>
            );
          })}
        </SGifsListContainer>
      );
    } else {
      return (
        <SNoResultsFound>
          <p>0 results founds. Try another keyword :)</p>
        </SNoResultsFound>
      );
    }
  }

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

  function showShowMoreGifsButton() {
    if (gifs.length > 0 && reqStatus) {
      return <SButton onClick={showMoreGifs}>Show more</SButton>;
    }
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
      {showGifs()}
      {showShowMoreGifsButton()}
    </SGifsFlexContainer>
  );
}
