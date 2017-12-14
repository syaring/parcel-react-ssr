import React from 'react';
import { shape, object, string, bool } from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export function HelloWorld({ login, data: { loading, error, user } }) {
  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    if (error.graphQLErrors && error.graphQLErrors.length) {
      return <h1>{error.graphQLErrors[0].message}</h1>;
    } else {
      return <h1>{error.message}</h1>;
    }
  }

  return (
    <h1>
      Hello{' '}
      <a href={`https://github.com/${login}`} target="_blank">
        {user.name || 'Unknown'}
      </a>!
    </h1>
  );
}

HelloWorld.propTypes = {
  login: string.isRequired,
  data: shape({
    loading: bool.isRequired,
    error: object,
    user: shape({
      name: string
    })
  }).isRequired
};

const GetUser = gql`
  query GetUserName($login: String!) {
    user(login: $login) {
      name
    }
  }
`;

const HelloWorldWithData = graphql(GetUser, {
  options: ({ login }) => ({ variables: { login } })
})(HelloWorld);
export default HelloWorldWithData;
