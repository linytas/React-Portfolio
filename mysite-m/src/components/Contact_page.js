import React from "react";
import Nav from "./Nav";
import Contact from "./Contact";
import Footer from "./Footer";
import Home_page from "./Home_page";
import Portfolio_page from "./Portfolio_paga";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Contact_page() {
  return (
    <div className="Contact_page">
      <Router>
        <Nav>
          <Switch>
            <Route path="/contact" exact component={Contact_page} />
            <Route path="/" exact component={Home_page} />
            <Route path="/portfolio" exact component={Portfolio_page} />
          </Switch>
        </Nav>
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default Contact_page;
