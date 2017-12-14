import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { GITHUB_ENDPOINT, GITHUB_TOKEN } from './constants';
import App from './components/App';

const client = new ApolloClient({
  link: new HttpLink({
    uri: GITHUB_ENDPOINT,
    headers: {
      Authorization: `bearer ${GITHUB_TOKEN}`
    }
  }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
});

const element = document.getElementById('app');
ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  element
);

if (module.hot) {
  module.hot.accept();
}
