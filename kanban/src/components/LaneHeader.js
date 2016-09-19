import React from 'react';
import uuid from 'uuid';
import connect from './connect';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import Editable from './Editable';

const LaneHeader = connect(() => ({}), {
  NoteActions,
  LaneActions
})(({lane, LaneActions, NoteActions, ...props}) => {
  const addNote = e => {
    // If note is added, avoid opening lane name edit by stopping
    // event bubbling in this case.
    e.stopPropagation();

    const noteId = uuid.v4();

    NoteActions.create({
      id: noteId,
      task: 'New task'
    });
    LaneActions.attachToLane({
      laneId: lane.id,
      noteId
    });
  };
  const editName = name => {
    LaneActions.update({
      id: lane.id,
      name,
      editing: false
    });
  };
  const deleteLane = e => {
    // Avoid bubbling to edit
    e.stopPropagation();

    LaneActions.delete(lane.id);
  };
  const activateLaneEdit = () => {
    LaneActions.update({
      id: lane.id,
      editing: true
    });
  };

  return (
    <div className="lane-header" onClick={activateLaneEdit} {...props}>
      <div className="lane-add-note">
        <button onClick={addNote}>+</button>
      </div>
      <Editable className="lane-name" editing={lane.editing}
        value={lane.name} onEdit={editName} />
      <div className="lane-delete">
        <button onClick={deleteLane}>x</button>
      </div>
    </div>
  );
});

export default LaneHeader;
