import { createStore } from 'redux';
import rootReducer from '../reducers';

let sharedStore = null;

function get() {
  return sharedStore;
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

  sharedStore = store;

  return store;
}

export default {
  get,
  init
};
