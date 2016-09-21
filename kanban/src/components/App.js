import React from 'react';
import uuid from 'uuid';
import { compose } from 'redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import connect from '../state/connect';
import Lanes from './Lanes';
import { LaneActions } from '../state/actions';

const App = ({ createLane, lanes }) => {
  const addLane = () => {
    createLane({
      id: uuid.v4(),
      name: 'New lane'
    });
  };

  return (
    <div>
      <button className="add-lane" onClick={addLane}>+</button>
      <Lanes lanes={lanes} />
    </div>
  );
};

export default compose(
  DragDropContext(HTML5Backend),
  connect(
    ({ lanes }) => ({ lanes }),
    {
      createLane: LaneActions.createLane
    }
  )
)(App);
