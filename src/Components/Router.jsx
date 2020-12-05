import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navgation from "./Navgation";
import Header from "./Header";
import Home from "../Screens/Home";
import Chats from "../Screens/Chats/Chats";
import Shap from "../Screens/Shap";
import Setting from "../Screens/Setting";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chats" component={Chats} />
        <Route path="/shap" component={Shap} />
        <Route path="/setting" component={Setting} />

        {/* <Redirect from="*" to="/" /> */}
      </Switch>
      <Navgation />
    </>
  </Router>
);
