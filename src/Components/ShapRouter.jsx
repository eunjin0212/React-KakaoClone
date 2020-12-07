import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Covid19 from "./Covid19";
import News from "./News";
import KakaoTV from "./KakaoTV";
import Entertain from "./Entertain";
import Fun from "./Fun";
import Sports from "./Sports";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/covid19" exact component={Covid19} />
        <Route path="/news" component={News} />
        <Route path="/kakaotv" component={KakaoTV} />
        <Route path="/fun" component={Fun} />
        <Route path="/entertain" component={Entertain} />
        <Route path="/sports" component={Sports} />
      </Switch>
    </>
  </Router>
);
