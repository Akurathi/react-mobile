import React from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Details from "./components/Details";

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
