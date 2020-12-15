import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Navgation from "./Navgation";
import Header from "./Header/Header";
import Friends from "../Screens/Friends/Friends";
import Chats from "../Screens/Chats/";
import Shap from "../Screens/Shap/Shap";
import More from "../Screens/More";
import Setting from "../Screens/Setting";
import Covid19 from "../Screens/Shap/Covid19";
import KakaoTV from "../Screens/Shap/KakaoTV";
import Entertain from "../Screens/Shap/Entertain";
import Fun from "../Screens/Shap/Fun";
import Sports from "../Screens/Shap/Sports";
import OpenChat from "../Screens/Chats/OpenChat";

// eslint-disable-next-line import/no-anonymous-default-export
const Routers = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Friends} />
          <Route path="/chats" component={Chats} />
          <Route path="/shap" component={Shap} />
          <Route path="/more" component={More} />
          <Route path="/setting" component={Setting} />
          <Route path="/covid19" component={Covid19} />
          <Route path="/kakaotv" component={KakaoTV} />
          <Route path="/fun" component={Fun} />
          <Route path="/entertain" component={Entertain} />
          <Route path="/sports" component={Sports} />
          <Route path="/openchats" component={OpenChat} />
          <Redirect from="*" to="/" />
        </Switch>
        <Navgation />
      </Router>
    </>
  );
};
export default Routers;
