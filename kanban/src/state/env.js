let env = 'alt';

const get = () => env;
const set = e => {
  env = e;
};

export default {
  get,
  set
};
