import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux';
import Router from './src/config/navigation/router';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
