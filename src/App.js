import "./App.css";
import Navbar from "./components/Navbar.js";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import { useEffect, useRef } from "react";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import Blog from "./components/pages/Blog";
import Nepal from "./components/blogs/Nepal";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/nepal" component={Nepal} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
