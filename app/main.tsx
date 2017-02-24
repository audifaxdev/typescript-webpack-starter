import * as React from "react";
import {render} from "react-dom";
import {Router, Route, hashHistory} from "react-router";

import { Home } from "./home";
import { About } from "./about";

render(
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Router>
  </div>,
  document.getElementById("my-app")
);