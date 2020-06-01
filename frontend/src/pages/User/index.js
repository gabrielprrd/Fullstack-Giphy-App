import React, { useEffect, useContext } from "react";
import { AuthContext } from "../../store/AuthProvider";

export default function User() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <div className="page-container">
      <h1>Welcome, {user.name}!</h1>
      <p>Here are the gifs you saved</p>
      {user.gifs.map((item) => {
        return (
          <div className="gif-container" key={item.id}>
            <img src={item.images.fixed_height.url} alt={item.title} />
          </div>
        );
      })}
    </div>
  );
}
