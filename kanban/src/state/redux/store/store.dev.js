import { createStore } from 'redux';
import rootReducer from '../reducers';

let store = null;

function get() {
  return store;
}

function init(initialState) {
  const store = createStore(rootReducer, initialState);

  if(module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers/index').default;

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default {
  get,
  init
};
