import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navgation from "./Navgation";
import Home from "../Screens/Home";
import Chat from "../Screens/Chat";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chat" component={Chat} />
        <Redirect from="*" to="/" />
      </Switch>
      <Navgation />
    </>
  </Router>
);
