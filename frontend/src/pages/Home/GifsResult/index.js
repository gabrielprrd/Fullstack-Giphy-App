import React, { useContext } from "react";
import { GifsContext } from "../../../store/index";

export default function GifsResult() {
  const { gifs } = useContext(GifsContext);
  return (
    <div>
      {gifs.map((item) => {
        return (
          <div className="gif-container" key={item.id}>
            <img src={item.images.fixed_height.url} alt={item.title} />
          </div>
        );
      })}
    </div>
  );
}
