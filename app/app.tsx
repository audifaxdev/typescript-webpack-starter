import * as React from 'react';
import * as Redux from 'redux';
import {Router, Route} from "react-router";
import {History} from "History";

import Home from "./components/home";
import { About } from "./components/about";
import { Provider } from 'react-redux';

interface AppProps {
  store: Redux.Store<any>;
  history: History | any;
}

export const App = (props: AppProps) => (
  <Provider store={props.store}>
    <Router history={props.history}>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Router>
  </Provider>
);