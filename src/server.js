import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router-dom';
import cheerio from 'cheerio';

import App from './components/App';
import fs from 'fs';
import path from 'path';

const templatePath = path.join(__dirname, '..', 'client', 'index.html');
const HTML_TEMPLATE = fs.readFileSync(templatePath).toString();

export default function middleware(req, res) {
  const context = {};
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.originalUrl} context={context}>
      <App />
    </StaticRouter>
  );

  if (context.url) {
    return res.redirect(301, context.url);
  }

  const helmet = Helmet.renderStatic();
  const $template = cheerio.load(HTML_TEMPLATE);
  $template('head').append(
    helmet.title.toString() + helmet.meta.toString() + helmet.link.toString()
  );
  $template('#app').html(content);

  res.send($template.html());
}
