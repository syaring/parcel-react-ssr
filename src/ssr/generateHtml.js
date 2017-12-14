import fs from 'fs';
import path from 'path';
import { Helmet } from 'react-helmet';
import cheerio from 'cheerio';

const templatePath = path.join(__dirname, '..', '..', 'client', 'index.html');
const HTML_TEMPLATE = fs.readFileSync(templatePath).toString();

const formatState = state => JSON.stringify(state).replace(/</g, '\\u003c');

export default function generateHtml(markup, initialState) {
  const helmet = Helmet.renderStatic();
  const formattedState = formatState(initialState);

  const $template = cheerio.load(HTML_TEMPLATE);
  $template('head').append(
    helmet.title.toString() + helmet.meta.toString() + helmet.link.toString()
  );
  $template('#app')
    .html(markup)
    .after(`<script>window.__APOLLO_STATE__=${formattedState}</script>`);

  return $template.html();
}
