import update from 'react-addons-update';
import * as types from '../actions/LaneActions';

const initialState = [];

export default function lanes(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_LANE:
      return [...state, action.lane];

    case types.UPDATE_LANE:
      return state.map((lane) => {
        if (lane.id === action.id) {
          const { type, ...updatedLane } = action; // eslint-disable-line no-unused-vars

          return { ...lane, ...updatedLane };
        }

        return lane;
      });

    case types.DELETE_LANE:
      return state.filter((lane) => lane.id !== action.id);

    case types.ATTACH_TO_LANE:
      const laneId = action.laneId;
      const noteId = action.noteId;

      return state.map((lane) => {
        const index = lane.notes.indexOf(noteId);

        if (index >= 0) {
          return {
            ...lane,
            notes: lane.notes.length > 1 ? lane.notes.slice(0, index).concat(
              lane.notes.slice(index + 1)
            ): []
          };
        }
        if (lane.id === laneId) {
          return {
            ...lane,
            notes: [...lane.notes, noteId]
          };
        }

        return lane;
      });

    case types.DETACH_FROM_LANE:
      return state.map((lane) => {
        if (lane.id === action.laneId) {
          return {
            ...lane,
            notes: lane.notes.filter((id) => id !== action.noteId)
          };
        }

        return lane;
      });

    case types.MOVE_FROM_LANE_TO_LANE:
      const sourceId = action.sourceId;
      const targetId = action.targetId;

      const lanes = state;
      const sourceLane = lanes.filter((lane) => {
        return lane.notes.indexOf(sourceId) >= 0;
      })[0];
      const targetLane = lanes.filter((lane) => {
        return lane.notes.indexOf(targetId) >= 0;
      })[0];
      const sourceNoteIndex = sourceLane.notes.indexOf(sourceId);
      const targetNoteIndex = targetLane.notes.indexOf(targetId);

      if(sourceLane === targetLane) {
        return state.map((lane) => {
          return lane.id === sourceLane.id ? {
            ...lane,
            notes: update(sourceLane.notes, {
              $splice: [
                [sourceNoteIndex, 1],
                [targetNoteIndex, 0, sourceId]
              ]
            })
          } : lane;
        });
      }

      return state.map((lane) => {
        if(lane === sourceLane) {
          // get rid of the source note
          return {
            ...lane,
            notes: lane.notes.length > 1 ? lane.notes.slice(0, sourceNoteIndex).concat(
              lane.notes.slice(sourceNoteIndex + 1)
            ): []
          };
        }

        if(lane === targetLane) {
          // and move it to target
          return {
            ...lane,
            notes: lane.notes.slice(0, targetNoteIndex).concat(
              [sourceId]
            ).concat(
              lane.notes.slice(targetNoteIndex)
            )
          };
        }

        return lane;
      });

    default:
      return state;
  }
}
