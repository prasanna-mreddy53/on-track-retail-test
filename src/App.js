import React from "react";
import "./App.scss";

import Header from "./header/header.component";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./home/home.component";
function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/books/:page" component={Home} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
