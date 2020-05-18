import React, { useState, useEffect, useContext, useRef } from "react";
import { Form } from "@unform/web";
import axios from "axios";
import * as Yup from "yup";

//components
import { GifsContext } from "../../store/index";
import GifsResult from "./GifsResult/index";
import Input from "../../components/Form/Input";

export default function Home() {
  const formRef = useRef(null);
  const { gifs, setGifs } = useContext(GifsContext);
  const [reqStatus, setReqStatus] = useState({ isReqSent: false });
  const [select, setSelect] = useState("gifs");

  // Retrieves form data and calls the ajax request to send it to server
  async function handleSubmit(data, { reset }) {
    try {
      setReqStatus({ isReqSent: true });

      Yup.object().shape({
        query: Yup.string().required("Please type something"),
      });

      // Sends the query data to backend so it can be used on the giphy's endpoint
      const handleAjaxRequest = (data) => {
        axios({
          method: "post",
          url: "http://localhost:5000/results/",
          data: { data, select },
        });
      };
      handleAjaxRequest(data);

      // Cleans the input fiels
      reset();
    } catch (err) {
      console.log(err);
    }
  }

  function handleSelectChange(imgType) {
    setSelect(imgType);
  }

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
  }, [gifs]);

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
      {reqStatus.isReqSent && <GifsResult />}
    </div>
  );
}
