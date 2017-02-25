import * as React from "react";
import {render} from "react-dom";
import {App} from "./app";
import { createStore } from 'redux';
import myReducers from './reducers';

render(<App store={createStore(myReducers, window['__PRELOADED_STATE__'])}/>, document.getElementById("my-app"));