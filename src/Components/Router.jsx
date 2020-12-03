import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navgation from "./Navgation";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router>
    <>
      <Switch>
        <Route path exact component={Navgation} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
