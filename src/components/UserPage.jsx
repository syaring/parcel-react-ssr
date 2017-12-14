import React from 'react';
import { Helmet } from 'react-helmet';
import { object } from 'prop-types';

import { GITHUB_TOKEN } from '../constants';
import HelloWorld from './HelloWorld';
import LoginForm from './LoginForm';

export default function UserPage({ match: { params: { login } } }) {
  if (!GITHUB_TOKEN) {
    return (
      <h1>
        Missing your GitHub token! You must set your environment variable
        GITHUB_TOKEN.{' '}
        <a href="https://github.com/settings/tokens" target="_blank">
          Go to this page to generate a token with read:user access.
        </a>
      </h1>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <LoginForm current={login} />
      <hr />
      <HelloWorld login={login} />
    </div>
  );
}

UserPage.propTypes = {
  match: object.isRequired
};
