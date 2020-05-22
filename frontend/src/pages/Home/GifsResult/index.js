import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

// Context
import { GifsContext } from "../../../store/GifsProvider";
import { AuthContext } from "../../../store/AuthProvider";

export default function GifsResult({ isReqSent, query, select }) {
  const { gifs } = useContext(GifsContext);
  const { isAuth } = useContext(AuthContext);
  const [savedGif, setSavedGif] = useState([]);
  const [fetchedIncrementer, setFetchedIncrementer] = useState(2);

  function handleClick(item) {
    setSavedGif(item);
  }

  // async function handleSubmit(savedGif) {
  //   handleAjaxRequest()
  //   axios({
  //     method: 'post',
  //     url: '',
  //     data: savedGif
  //   })
  // }

  let incrementer = fetchedIncrementer

  function showMoreGifs() {
    try {
      incrementer++
      setFetchedIncrementer(incrementer);
      const handleAjaxRequest = () => {
        axios({
          method: "post",
          url: "http://localhost:5000/results",
          data: { query, select, fetchedIncrementer },
        });
      };
      handleAjaxRequest();
    } catch (err) {
      console.log(err);
    }
  }

  // useEffect(() => {
  //   console.log(savedGif);
  // }, [savedGif]);

  return (
    <div>
      {gifs.map((item) => {
        return (
          <div className="gif-container" key={item.id}>
            <img src={item.images.fixed_height.url} alt={item.title} />
            {isAuth && <button onClick={(e) => handleClick(item)}>Save</button>}
          </div>
        );
      })}

      {isReqSent && <button onClick={showMoreGifs}>Show more</button>}
    </div>
  );
}
