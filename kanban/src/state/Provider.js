import AltProvider from './alt/Provider';
import ReduxProvider from './redux/Provider';
import env from './env';

export default (props) => {
  const providers = {
    alt: AltProvider,
    redux: ReduxProvider
  };

  return providers[env.get()](props);
};
