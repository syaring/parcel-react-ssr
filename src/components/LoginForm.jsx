import React from 'react';
import { string, object } from 'prop-types';

export default function LoginForm({ current }, { router }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const login = e.target.elements.login.value;
        router.history.push(`/user/${login}`);
      }}
    >
      <label>
        <h2>Enter your GitHub login:</h2>
        <input id="login" type="text" defaultValue={current} />
      </label>
      <input type="submit" value="Submit!" />
    </form>
  );
}

LoginForm.propTypes = {
  current: string.isRequired
};

LoginForm.contextTypes = {
  router: object.isRequired
};
