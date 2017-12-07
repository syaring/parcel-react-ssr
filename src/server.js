import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/App';
import fs from 'fs';
import path from 'path';

const templatePath = path.join(__dirname, '..', 'client', 'index.html');
const HTML_TEMPLATE = fs.readFileSync(templatePath).toString();

export default function middleware(req, res) {
  const content = ReactDOMServer.renderToString(<App />);
  const html = HTML_TEMPLATE.replace(
    '<div id="app">',
    '<div id="app">' + content
  );

  res.send(html);
}

global.__MIDDLEWARE__ = middleware;
