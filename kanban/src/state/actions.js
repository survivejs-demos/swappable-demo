import * as altActions from './alt/actions';
import * as reduxActions from './redux/actions';

const actions = {
  alt: altActions,
  redux: reduxActions
};
const getActions = name => env => actions[env][name];

const LaneActions = getActions('LaneActions');
const NoteActions = getActions('NoteActions');

export {
  LaneActions,
  NoteActions
};
