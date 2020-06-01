import React, { useState, useContext, useRef } from "react";
import { Form } from "@unform/web";
import axios from "axios";
import * as Yup from "yup";

// Components
import { GifsContext } from "../../store/GifsProvider";
import GifsResult from "./GifsResult/index";
import Input from "../../components/Form/Input";

// Styles
import { SContainer, SButton } from "../../appStyles";
import { SGhostForm, SGhostBody } from "./styles";

export default function Home() {
  const formRef = useRef(null);
  const { setGifs } = useContext(GifsContext);
  const [query, setQuery] = useState(""); // We need this query state to pass the query to the results component
  const [reqStatus, setReqStatus] = useState(false);
  const [select, setSelect] = useState("gifs");
  const [isFocused, setFocus] = useState(false);

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

  function toggleFocus() {
    setFocus(true);
  }

  return (
    <SContainer>
      <SGhostForm>
        <SGhostBody>
          <div className="face">
            <div className="mouth" />
          </div>
        </SGhostBody>

        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          method="POST"
          action="/results"
        >
          <Input
            name="query"
            required
            placeholder="Type anything"
            onFocus={toggleFocus}
            isfocused={isFocused ? 1 : 0}
          />
          <select
            name="imgType"
            onChange={(e) => handleSelectChange(e.target.value)}
          >
            <option value="gifs">Gifs</option>
            <option value="stickers">Stickers</option>
          </select>

          <SButton type="submit">Search Gifs</SButton>
        </Form>
      </SGhostForm>

      {/* If the request was sent to the server, it renders the gifs */}
      {reqStatus && (
        <GifsResult reqStatus={reqStatus} query={query} select={select} />
      )}
    </SContainer>
  );
}
