import React, { useState, useContext, useRef } from "react";
import axios from "axios";
import * as Yup from "yup";

// Components
import { GifsContext } from "../../store/GifsProvider";
import GifsResult from "./GifsResult/index";

// Styles
import { SContainer } from "../../assets/globalStyles/containers";
import {
  SGhostForm,
  SGhostBody,
  SForm,
  SInput,
  SSelect,
  SGhostButton,
} from "./styles";

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
    setFocus(!isFocused);
  }

  return (
    <SContainer>
      <SGhostForm onFocus={toggleFocus} onBlur={toggleFocus}>
        <SGhostBody isfocused={isFocused}>
          <div className="face">
            <div className="mouth" />
          </div>
        </SGhostBody>

        <SForm
          ref={formRef}
          onSubmit={handleSubmit}
          method="POST"
          action="/results"
        >
          <SInput
            name="query"
            required
            placeholder="Type anything"
            isfocused={isFocused ? 1 : 0}
          />
          <SSelect
            name="imgType"
            isfocused={isFocused}
            onChange={(e) => handleSelectChange(e.target.value)}
          >
            <option value="gifs">Gifs</option>
            <option value="stickers">Stickers</option>
          </SSelect>

          <SGhostButton type="submit" isfocused={isFocused}>
            Search Gifs
          </SGhostButton>
        </SForm>
      </SGhostForm>

      {/* If the request was sent to the server, it renders the gifs */}
      {reqStatus && (
        <GifsResult reqStatus={reqStatus} query={query} select={select} />
      )}
    </SContainer>
  );
}
