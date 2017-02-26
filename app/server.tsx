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

const indexFilePath = __dirname + '/public/index.html';
console.log(indexFilePath);

if (!fs.existsSync(indexFilePath)) {
  console.log(indexFilePath+' not found');
  process.exit(1);
}

//Precompile template string
let indexHtml = compile(fs.readFileSync(indexFilePath));

const server = express();

let ReactServerMiddleware = (req, res, next) => {
  console.log('ReactServerMiddleware');

  const mapedPath = __dirname + '/public' + req.path;
  console.log('ReactServerMiddleware : req.path = ', req.path);
  console.log('ReactServerMiddleware : mapedPath = ', mapedPath);

  const ignoreList = ['/', 'index.html', 'index.htm', 'index'];

  if (!includes(ignoreList, req.path) && fs.existsSync(mapedPath)) {
    console.log('ReactServerMiddleware : file exist');
    return next();
  }

  const history = createMemoryHistory(req.url);
  const store = createStore(myReducers);
  const appString = ReactDOMServer.renderToString(
    <App store={store} history={history}/>
  );

  //resolve template string
  let data = resolveToString( indexHtml, {
    body: appString,
    title: 'Server Side rendering ON',
    preloadedState: JSON.stringify(store.getState())
  });
  res.send(data);
};

server.use(ReactServerMiddleware);
server.use('/', express.static('public'));

server.listen(8080);
console.log('React Server Rendering ON : Listening on 8080');