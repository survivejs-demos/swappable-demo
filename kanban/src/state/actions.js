import env from './env';
import * as altActions from './alt/actions';
import * as reduxActions from './redux/actions';

const actionDefinitions = {
  alt: altActions,
  redux: reduxActions
};
const getActions = name => {
  // There could be a separate common definition too. Using alt actions for now
  const actionDefinition = actionDefinitions.alt[name];

  // Generate an action wrapper that chooses action based on env
  return mapObject(actionDefinition, (_, action) => {
    return function () { // This cannot be () => because of binding!
      return actionDefinitions[env.get()][name][action].apply(null, arguments);
    };
  });
};

function mapObject(o, cb) {
  const ret = {};

  Object.keys(o).forEach(k => {
    ret[k] = cb(o[k], k);
  });

  return ret;
}

const LaneActions = getActions('LaneActions');
const NoteActions = getActions('NoteActions');

export {
  LaneActions,
  NoteActions
};
