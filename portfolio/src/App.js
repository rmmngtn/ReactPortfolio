import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NavBar from "./components/Navbar/index.js";
import Footer from "./components/Footer/index.js";
import Wrapper from "./components/Wrapper/index.js";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
