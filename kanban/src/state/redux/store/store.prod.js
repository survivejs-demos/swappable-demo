import { createStore } from 'redux';
import rootReducer from '../reducers';

let store = null;

function get() {
  return store;
}

function init(initialState) {
  return createStore(rootReducer, initialState);
}

export default {
  get,
  init
};
