import React from 'react';
import Editable from './Editable';
import Note from './Note';

const noop = () => {};

const Notes = ({
  notes,
  onNoteClick = noop, onEdit = noop, onDelete = noop, onMove = noop
}) => (
  <ul className="notes">{
    notes.map(({ id, editing, task }) =>
      <li key={id}>
        <Note className="note" id={id}
          editing={editing}
          onClick={e => onNoteClick(id, e)}
          onMove={onMove}>
          <Editable
            className="editable"
            editing={editing}
            value={task}
            onEdit={e => onEdit(id, e)} />
          <button
            className="delete"
            onClick={e => onDelete(id, e)}>x</button>
        </Note>
      </li>
    )
  }</ul>
);

export default Notes;
