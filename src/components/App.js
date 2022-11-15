import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../styles/App.css";
// import NavBar from "./NavBar";
import Layout from "./Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
