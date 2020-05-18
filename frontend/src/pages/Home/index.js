import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

//components
import { GifsContext } from "../../store/index";
import GifsResult from "./GifsResult/index";

export default function Home() {
  const { setGifs } = useContext(GifsContext);
  const [query, setQuery] = useState("");
  const [reqStatus, setReqStatus] = useState({ isReqSent: false });

  // Retrieves form data and calls the ajax request to send it to server
  const handleSubmit = (e) => {
    e.preventDefault();

    setReqStatus({ isReqSent: true });
    const payload = {
      query: query,
    };
    handleAjaxRequest(payload);
    setQuery(""); // clean the input
  };

  // Sends the query data to backend so it can be used on the giphy's endpoint
  const handleAjaxRequest = (payload) => {
    axios({
      method: "post",
      url: "http://localhost:5000/results/",
      data: payload,
    });
  };

  // Retrieves the result fetched from the giphy's endpoint
  useEffect(() => {
    const fetchFromServer = async () => {
      try {
        let response = await axios.get("http://localhost:5000/results/");
        return setGifs(response.data.data);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchFromServer();
  }, [reqStatus]);

  return (
    <div>
      <form onSubmit={handleSubmit} method="POST" action="/results">
        <input
          type="text"
          name="search"
          required
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select>
          <option value="gifs">Gif</option>
          <option value="stickers">Sticker</option>
        </select>
        <input type="submit" value="Search gifs" />
      </form>

      {/* If the request was sent to the server, it renders the gifs */}
      {reqStatus.isReqSent && <GifsResult />}
    </div>
  );
}
