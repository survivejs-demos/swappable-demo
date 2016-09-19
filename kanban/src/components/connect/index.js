import altConnect from './connect.alt';
import reduxConnect from './connect.redux';
import env from '../../libs/env';

export default (state, actions) => {
  const connects = {
    alt: altConnect,
    redux: reduxConnect
  };

  return connects[env.get()](state, actions);
}
