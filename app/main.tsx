import * as React from "react";
import {render} from "react-dom";
import {Router, Route, hashHistory} from "react-router";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Home from "./home";
import { About } from "./about";

import myReducers from './reducers';

render(
  <Provider store={createStore(myReducers)}>
    <Router history={hashHistory}>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Router>
  </Provider>,
  document.getElementById("my-app")
);