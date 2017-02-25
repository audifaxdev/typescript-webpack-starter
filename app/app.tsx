import * as React from 'react';
import {Router, Route, browserHistory} from "react-router";

import Home from "./home";
import { About } from "./about";
import { Provider } from 'react-redux';

export const App = (props) => (
  <Provider store={props.store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Router>
  </Provider>
)
