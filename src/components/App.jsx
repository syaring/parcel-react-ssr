import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import UserPage from './UserPage';
import AboutPage from './AboutPage';

import './App.css';

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - Parcel Example" defaultTitle="It works!">
        <meta charSet="utf-8" />
      </Helmet>
      <div>
        <Link to="/">Hello world</Link> - <Link to="/about">About</Link>
      </div>
      <Switch>
        <Redirect exact from="/" to="/user/exon" />
        <Route path="/user/:login" component={UserPage} />
        <Route path="/about" component={AboutPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
