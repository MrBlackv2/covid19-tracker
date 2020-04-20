import { LOAD_HIST_STATE_DATA } from '../actionTypes';

const initialState = {
  data: []
};

export default function (state = initialState, action: { type: string, payload?: any }) {
  switch (action.type) {
    case LOAD_HIST_STATE_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
