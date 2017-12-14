import serverRender from './ssr/serverRender';
import generateHtml from './ssr/generateHtml';

export default function middleware(req, res) {
  serverRender(req.originalUrl).then(({ markup, context, initialState }) => {
    if (context.url) {
      return res.redirect(301, context.url);
    }

    const html = generateHtml(markup, initialState);
    res.send(html);
  });
}
