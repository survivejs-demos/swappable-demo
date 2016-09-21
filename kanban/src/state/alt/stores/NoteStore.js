import NoteActions from '../actions/NoteActions';

export default class NoteStore {
  constructor() {
    this.bindActions(NoteActions);

    this.notes = [];
  }
  createNote(note) {
    this.setState({ notes: this.notes.concat(note) });
  }
  updateNote(updatedNote) {
    this.setState({
      notes: this.notes.map(note => {
        if(note.id === updatedNote.id) {
          return { ...note, ...updatedNote };
        }

        return note;
      })
    });
  }
  deleteNote(id) {
    this.setState({
      notes: this.notes.filter(note => note.id !== id)
    });
  }
}
