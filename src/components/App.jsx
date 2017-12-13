import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';

import './App.css';

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - Parcel Example" defaultTitle="It works!">
        <meta charSet="utf-8" />
      </Helmet>
      <div>
        <Link to="/">Home</Link> - <Link to="/about">About</Link>
      </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
