// Setup express to handle Web requests

import * as compression from 'compression';
import * as express from 'express';
import * as path from 'path';
import { renderReact } from './middleware';
import favicon from '../browser/favicon.ico';

const app = express();

// Add gzip compression to responses
app.use(compression());

// Favicon
const faviconFileName = favicon.slice(favicon.lastIndexOf('/') + 1);
app.use('/favicon.ico', (req, res) => res.sendFile(path.join(__dirname, `../client/${faviconFileName}`)));

// Expose the public directory as /dist and point to the browser version
app.use('/dist', express.static(`${__dirname}/../client`));

// Anything unresolved is serving the application and let
// react-router do the routing!
app.get('/*', renderReact);

// Check for PORT environment variable, otherwise fallback on Parcel default port
const port = process.env.PORT || 1234;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
