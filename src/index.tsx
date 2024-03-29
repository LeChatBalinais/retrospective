import React from 'react';
import { render } from 'react-dom';
import '~/style.scss';
import App from '~/components/App';
import '../reset.css';

const renderApp = (): void => {
  const app = document && document.getElementById('app');
  if (app) render(<App />, app);
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/App', (): void => {
    renderApp();
  });
}
