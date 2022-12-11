import React, { useContext } from "react";
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
import SponsorsPartners from "./components/SponsorsPartners/SponsorsPartners";
import CommonPage from "./components/CommonPage/CommonPage";
import LoginSignup from "./components/Login/LoginSignup";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";

import AuthContext from "./store/auth-context";

const App = (props) => {

  const authCtx = useContext(AuthContext);
  return (
    <React.Fragment>
      <Navbar />
      <Route exact path="/about/who-we-are">
        <CommonPage
          mainHeading="Who We Are"
          mainDescription="The Global Citizenship Foundation is one of the leading specialist organizations focusing on achieving the United Nations' Sustainable. Development Goal 4.7, that is, Education for global citizenship and sustainable development."
          secondHeading="What is Global Citizenship Education?"
        />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/about/secretariat">
        <CommonPage
          mainHeading="secretariat"
          mainDescription="The Global Citizenship Foundation is one of the leading specialist organizations focusing on achieving the United Nations' Sustainable. Development Goal 4.7, that is, Education for global citizenship and sustainable development."
          secondHeading="What is Global Citizenship Education?"
        />
      </Route>
      <Route exact path="/about/culture-of-practice">
        <CommonPage
          mainHeading="culture of practice"
          mainDescription="The Global Citizenship Foundation is one of the leading specialist organizations focusing on achieving the United Nations' Sustainable. Development Goal 4.7, that is, Education for global citizenship and sustainable development."
          secondHeading="What is Global Citizenship Education?"
        />
      </Route>
      <Route exact path={"/auth"}>
        {!authCtx.isLoggedIn && <LoginSignup />}
      </Route>
      <Route exact path={"/"}>
        <Header />
        <Focus />
        <Training />
        <Parallax />
        <Initiative />
        <SponsorsPartners />
        {/* <Stats /> */}
      </Route>
      {/* <Route exact path={"*"}>
        <NotFound />
      </Route> */}
      <Footer />
    </React.Fragment>
  );
};

export default App;
