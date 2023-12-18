import React from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { getInTouch } from "./store/config";
import GetInTouch from "./store/GetInTouch";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>

        <Footer>
          {getInTouch.show && (
            <GetInTouch
              heading={getInTouch.heading}
              message={getInTouch.message}
              email={getInTouch.email}
            />
          )}
        </Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
