import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "../styles/app.css";
import AddProperty from "./AddProperty";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import Layout from "./Layout";
import Properties from "./Properties";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/addproperties" element={<AddProperty />} />
        <Route path="/properties" element={<Properties />} />
      </Route>
    </Routes>
  );
};

export default App;
