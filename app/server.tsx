///<reference path="../node_modules/@types/node/index.d.ts"/>
import * as express from 'express';
import * as fs from 'fs';
import compile from 'es6-template-strings/compile';
import resolveToString from 'es6-template-strings/resolve-to-string';
import * as React from 'react';
import * as ReactServer from 'react-dom/server';
import { createStore } from 'redux';
import myReducers from './reducers';
import {App} from "./app";

const indexFilePath = __dirname + '/index.html';
console.log(indexFilePath);

if (!fs.existsSync(indexFilePath)) {
  console.log(indexFilePath+' not found');
  process.exit(1);
}

//Precompile template string
let indexHtml = compile(fs.readFileSync(indexFilePath));

const server = express();

server.use('/assets', express.static('assets'));

server.use((req, res) => {
  const store = createStore(myReducers);
  const appString = ReactServer.renderToString(<App store={store}/>);

  //resolve template string
  res.send(resolveToString( indexHtml, {
    body: appString,
    title: 'Server Side rendering ON',
    preloadedState: JSON.stringify(store.getState())
  }));
});

server.listen(8080);