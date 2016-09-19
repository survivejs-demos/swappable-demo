import React from 'react';
import { Provider } from 'react-redux';

export default ({ children, store }) => (
  <Provider store={store}>
    {children}
  </Provider>
);
