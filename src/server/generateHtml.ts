// Generate the HTML using index.html as a template

import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';
import { Helmet } from 'react-helmet';

// The path is relative from server bundle to client bundle, not the source
const templatePath = path.join(__dirname, '..', 'client', 'index.html');
const HTML_TEMPLATE = fs.readFileSync(templatePath).toString();

export default function generateHtml(markup: string) {
  // Get the serer-rendering values for the <head />
  const helmet = Helmet.renderStatic();

  const $template = cheerio.load(HTML_TEMPLATE);
  $template('head').append(helmet.title.toString() + helmet.meta.toString() + helmet.link.toString());
  $template('#app').html(markup);

  return $template.html();
}
