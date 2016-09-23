import React from 'react';
import EnvSelector from './EnvSelector';
import environment from '../state/env';
import Provider from '../state/Provider';

class Env extends React.Component {
  state = {
    envs: environment.getEnvs(),
    env: environment.get()
  }
  getChildContext() {
    return { env: this.state.env };
  }
  render() {
    return (
      <div>
        <EnvSelector envs={this.state.envs} onSelect={this.selectEnv} />
        <Provider env={this.state.env}>
          {this.props.children}
        </Provider>
      </div>
    );
  }
  selectEnv = (env) => {
    environment.set(env);

    this.setState({
      envs: environment.getEnvs(),
      env
    });
  }
}
Env.childContextTypes = {
  env: React.PropTypes.string.isRequired
};

export default Env;