// Provides the gifs globally

import React, { useState, createContext } from "react";

// Fetched gifs
export const GifsContext = createContext();

export default function GifsProvider({ children }) {
  const [gifs, setGifs] = useState([]);

  return (
    <GifsContext.Provider value={{ gifs, setGifs }}>
      {children}
    </GifsContext.Provider>
  );
}
