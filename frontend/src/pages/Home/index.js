import React, { useState, useEffect, useContext, useRef } from "react";
import { Form } from "@unform/web";
import axios from "axios";
import * as Yup from "yup";

//components
import { GifsContext } from "../../store/GifsProvider";
import GifsResult from "./GifsResult/index";
import Input from "../../components/Form/Input";

export default function Home() {
  const formRef = useRef(null);
  const { gifs, setGifs } = useContext(GifsContext);
  const [query, setQuery] = useState(""); // We need this query state to pass the query to the results component
  const [reqStatus, setReqStatus] = useState(false);
  const [select, setSelect] = useState("gifs");

  // Retrieves form data and calls the ajax request to send it to server
  async function handleSubmit(data, { reset }) {
    try {
      Yup.object().shape({
        query: Yup.string().required("Please type something"),
      });

      // Sends the query data to backend so it can be used on the giphy's endpoint
      const handleAjaxRequest = async (data) => {
        let query = data.query;
        await setQuery(query); // This is needed to pass the query as props to another component
        let response = await axios({
          method: "post",
          url: "http://localhost:5000/results/",
          data: { query, select },
        });
        setGifs(response.data.data);
      };
      await handleAjaxRequest(data);

      await setReqStatus(true);
      reset();
    } catch (err) {
      console.log(err);
    }
  }

  function handleSelectChange(imgType) {
    setSelect(imgType);
  }

  // Retrieves the result fetched from the giphy's endpoint
  // useEffect(() => {
  //   const fetchFromServer = async () => {
  //     try {
  //       let response = await axios.get("http://localhost:5000/results/");
  //       setGifs(response.data.data);
  //       console.log("Response: ", response);
  //     } catch (err) {
  //       throw new Error(err);
  //     }
  //   };
  //   fetchFromServer();
  // }, [reqStatus]);

  return (
    <div className="container">
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        method="POST"
        action="/results"
      >
        <Input name="query" required />
        <select
          name="imgType"
          onChange={(e) => handleSelectChange(e.target.value)}
        >
          <option value="gifs">Gifs</option>
          <option value="stickers">Stickers</option>
        </select>
        <button type="submit">Search Gifs</button>
      </Form>

      {/* If the request was sent to the server, it renders the gifs */}
      {reqStatus && (
        <GifsResult reqStatus={reqStatus} query={query} select={select} />
      )}
    </div>
  );
}
