import * as React from 'react';
import {Router, Route} from "react-router";

import Home from "./components/home";
import { About } from "./components/about";
import { Provider } from 'react-redux';

export const App = (props) => (
  <Provider store={props.store}>
    <Router history={props.history}>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Router>
  </Provider>
)
