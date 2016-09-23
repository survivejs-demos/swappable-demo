import React from 'react';
import AltProvider from './alt/Provider';
import ReduxProvider from './redux/Provider';

class Provider extends React.Component {
  render() {
    const { env, ...props } = this.props;
    const providers = {
      alt: AltProvider,
      redux: ReduxProvider
    };

    return providers[env](props);
  }
}
Provider.childContextTypes = {
  ...AltProvider.childContextTypes,
  ...ReduxProvider.childContextTypes
};

export default Provider;
