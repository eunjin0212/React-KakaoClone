import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Navgation from "../Components/Navgation";
import StatusBar from "../Components/StatusBar";
import Friends from "../Screens/Friends";
import Chats from "../Screens/Chats";
import Shap from "../Components/ShapHeader/ShapHeader";
import More from "../Screens/More";
import Setting from "../Screens/Setting";
import OpenChat from "../Screens/Chats/OpenChat";

// eslint-disable-next-line import/no-anonymous-default-export
const Routers = () => {
  return (
    <>
      <Router>
        <StatusBar />
        <Switch>
          <Route path="/" exact component={Friends} />
          <Route path="/chats" component={Chats} />
          <Route path="/shap" component={Shap} />
          <Route path="/more" component={More} />
          <Route path="/setting" component={Setting} />
          <Route path="/openchats" component={OpenChat} />
          <Redirect from="*" to="/" />
        </Switch>
        <Navgation />
      </Router>
    </>
  );
};

export default Routers;
