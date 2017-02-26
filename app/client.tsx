///<reference path="../node_modules/@types/node/index.d.ts"/>
import * as React from "react";
import {render} from "react-dom";
import {browserHistory} from "react-router";
import {App} from "./app";
import { createStore } from 'redux';
import myReducers from './redux/reducers';

import "styles/main.scss";

const store = createStore(myReducers, window['__REDUX_STATE__']);

render(
  <App history={browserHistory} store={store}/>,
  document.getElementById("my-app")
);