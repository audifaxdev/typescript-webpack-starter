///<reference types="node"/>
import * as express from 'express';
import * as fs from 'fs';
import {includes} from 'lodash';
import compile from 'es6-template-strings/compile.js';
import resolveToString from 'es6-template-strings/resolve-to-string.js';
import * as React from 'react';
import {createMemoryHistory} from 'react-router';
import * as ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import myReducers from './redux/reducers';
import {App} from "./app";

const reactMustRender = ['/', 'index.html', 'index.htm', 'index'];
const indexFilePath = __dirname + '/public/index.html';

if (!fs.existsSync(indexFilePath)) {
  console.log(indexFilePath+' not found');
  process.exit(1);
}

//Precompile template string
let indexHtml = compile(fs.readFileSync(indexFilePath));

fs.watchFile(indexFilePath, () => {
  console.log(indexFilePath + ' has changed : reloading...');
  indexHtml = compile(fs.readFileSync(indexFilePath));
});

const server = express();

let ReactServerMiddleware = (req, res, next) => {

  //Check if we must render or otherwise if the file exist
  if (!includes(reactMustRender, req.path) && fs.existsSync(__dirname + '/public' + req.path)) {
    return next();
  }

  const history = createMemoryHistory();
  const store = createStore(myReducers);

  history.createLocation(req.url);

  const appString = ReactDOMServer.renderToString(
    <App store={store} history={history}/>
  );

  //resolve template string
  let data = resolveToString( indexHtml, {
    body: appString,
    title: 'TS/React Server-side Rendering ON',
    initialState: JSON.stringify(store.getState())
  });

  res.send(data);
};

server.use(ReactServerMiddleware);
server.use('/', express.static('public'));

server.listen(8080);
console.log('React Server Rendering ON : Listening on 8080');