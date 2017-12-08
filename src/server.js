import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';

import App from './components/App';
import fs from 'fs';
import path from 'path';

const templatePath = path.join(__dirname, '..', 'client', 'index.html');
const HTML_TEMPLATE = fs.readFileSync(templatePath).toString();

export default function middleware(req, res) {
  const content = ReactDOMServer.renderToString(<App />);
  const helmet = Helmet.renderStatic();
  const head =
    helmet.title.toString() + helmet.meta.toString() + helmet.link.toString();
  const htmlAttributes = helmet.htmlAttributes.toString();
  const bodyAttributes = helmet.bodyAttributes.toString();

  let html = HTML_TEMPLATE.replace(
    '<div id="app">',
    '<div id="app">' + content
  ).replace('<head>', '<head>' + head);

  if (htmlAttributes) {
    html = html.replace('<html>', '<html ' + htmlAttributes + '>');
  }

  if (bodyAttributes) {
    html = html.replace('<body>', '<body ' + bodyAttributes + '>');
  }

  res.send(html);
}
