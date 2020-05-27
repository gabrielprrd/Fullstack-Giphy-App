import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../store/AuthProvider";

export default function User() {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const checkinfo = () => {
      console.log(user)
    }
    checkinfo();
  }, [user])
  // const [userGifs, setUserGifs] = useState([])
  // useEffect(() => {
  // fetch the database when the page renders or something changes
  // const fetchGifs = async () => {
  //   let response = await axios({
  //     method: "get",
  //     url: "http://localhost:5000/usergifs(?)/:id",
  //   });
  //  await setUserGifs([response.data.userInfo.gifs])
  // };
  // fetchGifs();
  // }, []);

  return (
    <div className="page-container">
      <h1>Welcome, {user.name}!</h1>
      <p>Here are the gifs you saved</p>
      {/* {user.gifs.map((item) => {
        return (
          <div className="gif-container" key={item.id}>
            <img src={item.images.fixed_height.url} alt={item.title} />
          </div>
        );
      })} */}
    </div>
  );
}
