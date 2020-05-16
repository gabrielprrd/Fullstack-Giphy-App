import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./store/routes";
import GifsProvider from "./store/index";

// import Home from './pages/Home/index';
// import Header from './components/Header/index';
// import Footer from './components/Footer/index';

function App() {
  return (
    <GifsProvider>
      <Router>
        <div className="App">
          {/* <Header /> */}
          <Routes />
          {/* <Footer /> */}
        </div>
      </Router>
    </GifsProvider>
  );
}

export default App;
