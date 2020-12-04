import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navgation from "./Navgation";
import Header from "./Header";
import Home from "../Screens/Home";
import Chat from "../Screens/Chat";
import Shap from "../Screens/Shap";
import Setting from "../Screens/Setting";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chat" component={Chat} />
        <Route path="/shap" component={Shap} />
        <Route path="/setting" component={Setting} />

        <Redirect from="*" to="/" />
      </Switch>
      <Navgation />
    </>
  </Router>
);
