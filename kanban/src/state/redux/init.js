import storage from '../storage';
import reduxStore from './store';

export default () => {
  const appStorage = 'redux-app';
  const storageTarget = localStorage;

  const store = reduxStore.init(
    storage(storageTarget).get(appStorage) || {}
  );

  store.subscribe(() => {
    if (!storage(storageTarget).get('debug')) {
      storage(storageTarget).set(appStorage, store.getState());
    }
  });
};
