import AltProvider from './Provider.alt';
import ReduxProvider from './Provider.redux';
import env from '../../libs/env';

export default (props) => {
  const providers = {
    alt: AltProvider,
    redux: ReduxProvider
  };

  return providers[env.get()](props);
};
