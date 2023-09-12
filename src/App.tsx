import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/Reset.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Home" />
        <Route path="/wiki" />
        <Route path="/gallery" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
