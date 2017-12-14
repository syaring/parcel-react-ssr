import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

import { GITHUB_ENDPOINT, GITHUB_TOKEN } from '../constants';

export default function createApolloClient() {
  return new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: GITHUB_ENDPOINT,
      headers: {
        Authorization: `bearer ${GITHUB_TOKEN}`
      },
      fetch
    }),
    cache: new InMemoryCache()
  });
}
