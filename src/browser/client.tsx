// Entry point for the browser
// Start your React application and add the required containers
// Here we have <BrowserRouter /> for react-router

import { rehydrateMarks } from 'react-imported-component';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import importedComponents from './imported'; // eslint-disable-line

import App from './App';

const element = document.getElementById('app');
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// In production, we want to hydrate instead of render
// because of the server-rendering
if (process.env.NODE_ENV === 'production') {
  // rehydrate the bundle marks
  rehydrateMarks().then(() => {
    ReactDOM.hydrate(app, element);
  });
} else {
  ReactDOM.render(app, element);
}

declare const module: NodeModule & {
  hot: any;
}
// Hot reload is that easy with Parcel
if (module.hot) {
  module.hot.accept();
}
