const CREATE_LANE = 'CREATE_LANE';
const createLane = lane => ({
  type: CREATE_LANE,
  lane: {
    notes: lane.notes || [],
    ...lane
  }
});

const UPDATE_LANE = 'UPDATE_LANE';
const updateLane = updatedLane => ({
  type: UPDATE_LANE,
  ...updatedLane
});

const DELETE_LANE = 'DELETE_LANE';
const deleteLane = id => ({
  type: DELETE_LANE,
  id
});

const ATTACH_TO_LANE = 'ATTACH_TO_LANE';
const attachToLane = (laneId, noteId) => ({
  type: ATTACH_TO_LANE,
  laneId,
  noteId
});

const DETACH_FROM_LANE = 'DETACH_FROM_LANE';
const detachFromLane = (laneId, noteId) => ({
  type: DETACH_FROM_LANE,
  laneId,
  noteId
});

const MOVE = 'MOVE';
const move = ({sourceId, targetId}) => ({
  type: MOVE,
  sourceId,
  targetId
});

export default {
  CREATE_LANE,
  createLane,
  UPDATE_LANE,
  updateLane,
  DELETE_LANE,
  deleteLane,
  ATTACH_TO_LANE,
  attachToLane,
  DETACH_FROM_LANE,
  detachFromLane,
  MOVE,
  move
};
