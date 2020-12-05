import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navgation from "./Navgation";
import Header from "./Header";
import Friends from "../Screens/Friends/Friends";
import Chats from "../Screens/Chats/Chats";
import Shap from "../Screens/Shap/Shap";
import Setting from "../Screens/Setting";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Friends} />
        <Route path="/chats" component={Chats} />
        <Route path="/shap" component={Shap} />
        <Route path="/setting" component={Setting} />

        {/* <Redirect from="*" to="/" /> */}
      </Switch>
      <Navgation />
    </>
  </Router>
);
