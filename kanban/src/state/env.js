let sharedEnv = 'alt';

const getEnvs = () => (
  ['alt', 'redux'].map(e => ({
    selected: e === sharedEnv,
    name: e
  }))
);
const get = () => sharedEnv;
const set = e => {
  sharedEnv = e;
};

export default {
  getEnvs,
  get,
  set
};
