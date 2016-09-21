import types from '../actions/NoteActions';

const initialState = [];

export default function notes(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_NOTE:
      return [...state, action.note];

    case types.UPDATE_NOTE:
      return state.map(note => {
        if (note.id === action.id) {
          const { type, ...updatedNote } = action; // eslint-disable-line no-unused-vars
          return { ...note, ...updatedNote };
        }

        return note;
      });

    case types.DELETE_NOTE:
      return state.filter(note => note.id !== action.id);

    default:
      return state;
  }
}
