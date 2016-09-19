import chromeDebug from 'alt-utils/lib/chromeDebug';
import alt from '../libs/alt';
import storage from '../libs/storage';
import persist from '../libs/persist';
import NoteStore from '../stores/NoteStore';
import LaneStore from '../stores/LaneStore';

export default () => {
  if(process.env.NODE_ENV !== 'production') {
    chromeDebug(alt);
  }

  alt.addStore('NoteStore', NoteStore);
  alt.addStore('LaneStore', LaneStore);

  persist(alt, storage(localStorage), 'alt-kanban');
};
