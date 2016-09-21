let sharedEnv = 'alt';

const get = () => sharedEnv;
const set = e => {
  sharedEnv = e;
};

export default {
  get,
  set
};
