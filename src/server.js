import serverRender from './ssr/serverRender';
import generateHtml from './ssr/generateHtml';

export default function middleware(req, res) {
  const { markup, context } = serverRender(req.originalUrl);

  if (context.url) {
    return res.redirect(301, context.url);
  }

  const html = generateHtml(markup);
  res.send(html);
}
