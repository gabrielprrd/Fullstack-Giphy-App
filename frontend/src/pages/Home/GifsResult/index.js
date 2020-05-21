import React, { useState, useContext, useEffect } from "react";
import { GifsContext } from "../../../store/GifsProvider";
import axios from "axios";

export default function GifsResult({ isReqSent }) {
  const { gifs } = useContext(GifsContext);
  const [savedGif, setSavedGif] = useState([]);

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

  function showMoreGifs(){
    
  }

  useEffect(() => {
    console.log(savedGif);
  }, [savedGif]);

  return (
    <div>
      {gifs.map((item) => {
        return (
          <div className="gif-container" key={item.id}>
            <img src={item.images.fixed_height.url} alt={item.title} />
            <button onClick={(e) => handleClick(item)}>Save</button>
          </div>
        );
      })}

      {isReqSent && <button onClick={showMoreGifs}>Show more</button>}
    </div>
  );
}
