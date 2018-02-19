// Setup express to handle Web requests

import express from 'express';
import middleware from './middleware';

const app = express();

// Expose the public directory as /dist and point to the browser version
app.use('/dist', express.static(__dirname + '/../client'));

// Anything unresolved is serving the application and let
// react-router do the routing!
app.get('/*', middleware);

// Check for PORT environment variable, otherwise fallback on Parcel default port
const port = process.env.PORT || 1234;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
