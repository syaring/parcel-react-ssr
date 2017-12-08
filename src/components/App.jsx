import React from 'react';
import { Helmet } from 'react-helmet';

import './App.css';

export default function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SSR example with React.js and ParcelJS</title>
      </Helmet>
      <div>MEOW!</div>
    </div>
  );
}
