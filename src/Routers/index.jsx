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
import News from "../Screens/Shap/News";
import More from "../Screens/More";
import Setting from "../Screens/Setting";
import OpenChat from "../Screens/OpenChat";
import Entertain from "../Screens/Shap/Entertain";
import Fun from "../Screens/Shap/Fun";
import Sport from "../Screens/Shap/Sport";

const Routers = () => {
  return (
    <Router>
      <StatusBar />
      <Switch>
        <Route path="/" exact component={Friends} />
        <Route path="/chats">
          <Switch>
            <Route path="/chats" exact component={Chats} />
            <Route path="/chats/openchats" component={OpenChat} />
          </Switch>
        </Route>
        <Route path="/shap">
          <Switch>
            <Route path="/shap" exact component={News} />
            <Route path="/shap/fun" component={Fun} />
            <Route path="/shap/entertain" component={Entertain} />
            <Route path="/shap/sport" component={Sport} />
          </Switch>
        </Route>
        <Route path="/more" component={More} />
        <Route path="/setting" component={Setting} />
        <Redirect from="*" to="/" />
      </Switch>
      <Navgation />
    </Router>
  );
};

export default Routers;
