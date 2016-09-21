const CREATE_NOTE = 'CREATE_NOTE';
const createNote = note => ({
  type: CREATE_NOTE,
  note
});

const UPDATE_NOTE = 'UPDATE_NOTE';
const updateNote = updatedNote => ({
  type: UPDATE_NOTE,
  ...updatedNote
});

const DELETE_NOTE = 'DELETE_NOTE';
const deleteNote = id => ({
  type: DELETE_NOTE,
  id
});

export default {
  CREATE_NOTE,
  createNote,
  UPDATE_NOTE,
  updateNote,
  DELETE_NOTE,
  deleteNote
};
