import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

const ReduxProvider = ({ children }) => (
  <Provider store={store.get()}>
    {children}
  </Provider>
);
ReduxProvider.childContextTypes = Provider.childContextTypes;

export default ReduxProvider;
