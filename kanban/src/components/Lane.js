import React from 'react';
import {compose} from 'redux';
import {DropTarget} from 'react-dnd';
import connect from '../state/connect';
import { LaneActions, NoteActions } from '../state/actions';
import ItemTypes from '../constants/itemTypes';
import Notes from './Notes';
import LaneHeader from './LaneHeader';

const Lane = ({
  connectDropTarget, lane, notes,
  detachFromLane, moveFromLaneToLane,
  updateNote, deleteNote,
  ...props
}) => {
  const editNote = (id, task) => {
    updateNote({ id, task, editing: false });
  };
  const detachAndDelete = (noteId, e) => {
    // Avoid bubbling to edit
    e.stopPropagation();

    detachFromLane({
      laneId: lane.id,
      noteId
    });
    deleteNote(noteId);
  };
  const activateNoteEdit = id => {
    updateNote({ id, editing: true });
  };

  return connectDropTarget(
    <div {...props}>
      <LaneHeader lane={lane} />
      <Notes
        notes={selectNotesByIds(notes, lane.notes)}
        onNoteClick={activateNoteEdit}
        onEdit={editNote}
        onDelete={detachAndDelete}
        onMove={moveFromLaneToLane}
      />
    </div>
  );
};

function selectNotesByIds(allNotes, noteIds = []) {
  // `reduce` is a powerful method that allows us to
  // fold data. You can implement `filter` and `map`
  // through it. Here we are using it to concatenate
  // notes matching to the ids.
  return noteIds.reduce((notes, id) =>
    // Concatenate possible matching ids to the result
    notes.concat(
      allNotes.filter(note => note.id === id)
    )
  , []);
}

const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;

    if(!targetProps.lane.notes.length) {
      sourceProps.attachToLane({
        laneId: targetProps.lane.id,
        noteId: sourceId
      });
    }
  }
};

export default compose(
  DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  })),
  connect(({notes}) => ({
    notes
  }), {
    detachFromLane: LaneActions.detachFromLane,
    moveFromLaneToLane: LaneActions.moveFromLaneToLane,
    updateNote: NoteActions.updateNote,
    deleteNote: NoteActions.deleteNote
  })
)(Lane);
