import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import NavbarMobile from "./Navbar/NavbarMobile";
import Home from "./Home";
import Quize from "./Quize/Quize";
// import Header from "./Header/Header";
// import HeaderPictures from "./Header/HeaderPictures";
// import Quize from "./Quize/Quize";
// import Section from "./Section/Section";

function App() {
  return (
    <div>
    <Router>
    <Navbar />
      <NavbarMobile />
     <Switch>
      <Route path="/">
      <Home />
      </Route>
      <Route path="/tests">
        <Quize />
      </Route>
     </Switch>
    </Router>
    </div>
  );
}

export default App;
