import env from './env';
import connectAlt from './alt/connect';
import connectRedux from './redux/connect';

export default (state, actions) => {
  const connect = {
    alt: connectAlt,
    redux: connectRedux
  };
  const currentEnv = env.get();

  return connect[currentEnv](state, actions);
}
