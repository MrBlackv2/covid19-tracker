import { LOAD_WORLD_DATA } from '../actionTypes';

const initialState = {
  data: []
};

export default function (state = initialState, action: { type: string, payload?: any }) {
  switch (action.type) {
    case LOAD_WORLD_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
