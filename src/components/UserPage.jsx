import React from 'react';
import { Helmet } from 'react-helmet';
import { object } from 'prop-types';

import HelloWorld from './HelloWorld';
import LoginForm from './LoginForm';

export default function UserPage({ match: { params: { login } } }) {
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
