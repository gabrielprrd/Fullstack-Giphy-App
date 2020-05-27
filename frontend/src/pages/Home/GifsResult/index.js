import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

// Context
import { GifsContext } from "../../../store/GifsProvider";
import { AuthContext } from "../../../store/AuthProvider";

export default function GifsResult({ reqStatus, query, select }) {
  const { gifs, setGifs } = useContext(GifsContext);
  const { isAuth, user } = useContext(AuthContext);
  const [fetchedIncrementer, setFetchedIncrementer] = useState(2);

  function handleClick(item) {
    const handleAjaxRequest = () => {
      axios({
        method: "post",
        url: `http://localhost:5000/savegif/${user._id}`,
        data: item,
      });
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
    <div>
      {gifs.map((item) => {
        return (
          <div className="gif-container" key={item.id}>
            <img src={item.images.fixed_height.url} alt={item.title} />
            {isAuth && <button onClick={(e) => handleClick(item)}>Save</button>}
          </div>
        );
      })}

      {reqStatus && <button onClick={showMoreGifs}>Show more</button>}
    </div>
  );
}
