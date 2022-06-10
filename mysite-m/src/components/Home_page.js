import React from "react";
import Home from "./Home";
import Nav from "./Nav";
import AboutMe from "./Aboutme";
import Summary from "./Summary";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import Portfolio_page from "./Portfolio_paga";
import Contact_page from "./Contact_page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home_page() {
  return (
    <div className="Home_page">
      <Router>
        <Nav>
          <Switch>
            <Route path="/" exact component={Home_page} />
            <Route path="/portfilo" exact component={Portfolio_page} />
            <Route path="/contact" exact component={Contact_page} />
          </Switch>
        </Nav>
        <Home />
        <AboutMe />
        <Summary />
        <Portfolio />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default Home_page;
