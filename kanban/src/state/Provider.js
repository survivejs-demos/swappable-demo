import AltProvider from './alt/Provider';
import ReduxProvider from './redux/Provider';

// TODO: wrap and aggregate childContextTypes
const Provider = ({ env, ...props }) => {
  const providers = {
    alt: AltProvider,
    redux: ReduxProvider
  };

  return providers[env](props);
};

export default Provider;
