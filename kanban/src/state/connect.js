import React from 'react';
import connectAlt from './alt/connect';
import connectRedux from './redux/connect';

export default (state, actions) => {
  const connect = {
    alt: connectAlt,
    redux: connectRedux
  };

  if (typeof state === 'function') {
    return target => {
      class EnvHandler extends React.Component {
        render() {
          return React.createElement(
            connect[this.context.env](state, actions)(target),
            this.props,
            this.context
          );
        }
      }
      EnvHandler.contextTypes = {
        env: React.PropTypes.string.isRequired
      };

      return EnvHandler;
    }
  }

  return target => props => (
    <target { ...{ ...props, ...actions } } />
  );
}
