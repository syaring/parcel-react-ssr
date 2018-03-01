// Main component of our application.
// We setup react-helmet, which let us nicely manage our <head />
// It's a nice library you should use!

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';
import favicon from './favicon.ico';

import asyncComponent from './AsyncComponent';
import HelloWorld from './HelloWorld';

const HelloWorld2 = asyncComponent(() => import('./HelloWorld2'));

export default function App() {
  return (
    <div>
      <Helmet defaultTitle="Hello World!">
        <meta charSet="utf-8" />
        <link href={favicon} rel="Shortcut Icon" type="image/x-icon" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <Route exact path="/codeSplit" component={HelloWorld2} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
