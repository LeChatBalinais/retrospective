import React from 'react';
import { Provider, connect } from 'react-redux';
import Link from 'redux-first-router-link';
import store from '~/store';
import { State } from '~/state';
import components from '~/routing/components-map';
import { actionCreator } from '../actions-reducers/route-composition-player';

const App2 = ({ page }: { page: string }): JSX.Element => {
  const Component = components[page];
  return Component;
};

const mapStateToProps = ({ page }: State): { page: string } => ({ page });

const App2Container = connect(mapStateToProps)(App2);

const App = (): JSX.Element => (
  <Provider store={store}>
    <App2Container />
    <Link
      to={actionCreator({
        compositionID: 'b12c49bf-af6d-49ce-82fc-f82b811c750e'
      })}
    >
      Composition Player
    </Link>
  </Provider>
);

export default App;
