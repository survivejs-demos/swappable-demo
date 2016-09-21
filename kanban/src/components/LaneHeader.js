import React from 'react';
import uuid from 'uuid';
import connect from '../state/connect';
import { LaneActions, NoteActions } from '../state/actions';
import Editable from './Editable';

const LaneHeader = connect(() => ({}), {
  attachToLane: LaneActions.attachToLane,
  updateLane: LaneActions.updateLane,
  deleteLane: LaneActions.deleteLane,
  createNote: NoteActions.createNote
})(({
  lane,
  attachToLane, updateLane, deleteLane,
  createNote,
  ...props
}) => {
  const addNoteWithoutBubbling = e => {
    // If note is added, avoid opening lane name edit by stopping
    // event bubbling in this case.
    e.stopPropagation();

    const noteId = uuid.v4();

    createNote({
      id: noteId,
      task: 'New task'
    });
    attachToLane({
      laneId: lane.id,
      noteId
    });
  };
  const editName = name => {
    updateLane({
      id: lane.id,
      name,
      editing: false
    });
  };
  const deleteWithoutBubbling = e => {
    // Avoid bubbling to edit
    e.stopPropagation();

    deleteLane(lane.id);
  };
  const activateLaneEdit = () => {
    updateLane({
      id: lane.id,
      editing: true
    });
  };

  return (
    <div className="lane-header" onClick={activateLaneEdit} {...props}>
      <div className="lane-add-note">
        <button onClick={addNoteWithoutBubbling}>+</button>
      </div>
      <Editable className="lane-name" editing={lane.editing}
        value={lane.name} onEdit={editName} />
      <div className="lane-delete">
        <button onClick={deleteWithoutBubbling}>x</button>
      </div>
    </div>
  );
});

export default LaneHeader;
