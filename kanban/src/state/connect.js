import connectAlt from './alt/connect';
import connectRedux from './redux/connect';
import env from './env';

export default (state, actions) => {
  const connects = {
    alt: connectAlt,
    redux: connectRedux
  };
  const currentEnv = env.get();

  return connects[currentEnv](
    state,
    mapObject(actions, action => action(currentEnv))
  );
}

function mapObject(o, cb) {
  const ret = {};

  Object.keys(o).forEach(k => {
    ret[k] = cb(o[k]);
  });

  return ret;
}

