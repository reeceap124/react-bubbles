import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import { PrivateRoute } from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
          <PrivateRoute path='/bubbles' component={BubblePage}/>
          <Route exact path="/" component={Login} />
          <Route component={Login}/>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
