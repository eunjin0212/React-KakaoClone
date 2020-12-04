import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navgation from "./Navgation";
import Header from "./Header";
import ChatHeader from "../Screens/Chats/ChatHeader";
import Home from "../Screens/Home";
import Chats from "../Screens/Chats/Chats";
import OpenChats from "../Screens/Chats/OpenChats";
import Shap from "../Screens/Shap";
import Setting from "../Screens/Setting";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router>
    <>
      <Header>
        <ChatHeader>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/openchats" component={OpenChats} />
          </Switch>
        </ChatHeader>
      </Header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chats" component={Chats} />
        <Route path="/shap" component={Shap} />
        <Route path="/setting" component={Setting} />

        <Redirect from="*" to="/" />
      </Switch>
      <Navgation />
    </>
  </Router>
);
