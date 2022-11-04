import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Focus from "./components/Focus/Focus";
import Training from "./components/Training/Training";
import Footer from "./components/Footer/Footer";
import Initiative from "./components/Initiative/Initiative";
import Parallax from "./components/Parallax/Parallax";
import Stats from "./components/Stats/Stats";
import Navbar from "./components/Navbar/Navbar";

const App = (props) => {
  return (
    <React.Fragment>
      <Route path={"/"}>
        <Navbar />
        <Header />
        <Focus />
        <Training />
        <Parallax />
        <Initiative />
        <Stats />
        <Footer />
      </Route>
    </React.Fragment>
  );
};

export default App;
