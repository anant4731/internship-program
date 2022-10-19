import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Focus from "./components/Focus/Focus";
import Training from "./components/Training/Training";
import Footer from "./components/Footer/Footer";

const App = (props) => {
  return (
    <React.Fragment>
      <Route path={"/"}>
        <Navbar />
        <Header />
        <Focus />
        <Training />
        <Footer />
      </Route>
    </React.Fragment>
  );
};

export default App;
