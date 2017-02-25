import * as React from "react";
import {render} from "react-dom";
import {browserHistory} from "react-router";
import {App} from "./app";
import { createStore } from 'redux';
import myReducers from './redux/reducers';

render(
  <App history={browserHistory} store={createStore(myReducers, window['__PRELOADED_STATE__'])}/>,
  document.getElementById("my-app")
);