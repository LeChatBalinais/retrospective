import React from 'react';
import { render } from 'react-dom';
import './style.css';
import App from './components/App';
import '../reset.css';
import '../node_modules/regenerator-runtime/runtime';

const renderApp = () => {
  const app = document && document.getElementById('app');
  if (app) render(<App />, app);
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp();
  });
}
