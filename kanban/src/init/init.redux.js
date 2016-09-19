import storage from '../libs/storage';
import { init } from '../store';

export default () => {
  const appStorage = 'redux-app';

  const store = init(storage.get(appStorage));

  store.subscribe(() => {
    if (!storage.get('debug')) {
      storage.set(appStorage, store.getState());
    }
  });
};
