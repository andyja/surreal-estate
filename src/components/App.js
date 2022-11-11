import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/App.css";
import NavBar from "./NavBar";

const App = () => {
  return (
    <>
      <div className="App">
        <NavBar />
      </div>
      <p>Hello World</p>
    </>
  );
};

export default App;
