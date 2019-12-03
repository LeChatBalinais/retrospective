import React from 'react';
import { Provider, connect } from 'react-redux';
import store from '~/store';
import { State } from '~/state';
import components from '~/routing/components-map';

const App2 = ({ page }: { page: string }): JSX.Element => {
  const Component = components[page];
  return Component;
};

const mapStateToProps = ({ page }: State): { page: string } => ({ page });

const App2Container = connect(mapStateToProps)(App2);

const App = (): JSX.Element => (
  <Provider store={store}>
    <App2Container />
  </Provider>
);

export default App;
