import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Focus from "./components/Focus/Focus";

const App = (props) => {
  return (
    <React.Fragment>
      <Route path={"/"}>
        <Navbar />
        <Header />
        <Focus />
      </Route>
    </React.Fragment>
  );
};

export default App;
