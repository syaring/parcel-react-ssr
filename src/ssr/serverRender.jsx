import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ApolloProvider, getDataFromTree } from 'react-apollo';

import App from '../components/App';
import createApolloClient from './createApolloClient';

export default function serverRender(url) {
  const client = createApolloClient();
  const context = {};
  const app = (
    <ApolloProvider client={client}>
      <StaticRouter location={url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  return new Promise(resolve => {
    const finalRender = () => {
      const markup = ReactDOM.renderToString(app);
      const initialState = client.extract();
      resolve({ context, markup, initialState });
    };

    getDataFromTree(app)
      .then(finalRender)
      .catch(finalRender);
  });
}
