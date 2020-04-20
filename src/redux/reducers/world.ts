import { LOAD_WORLD_DATA, SET_SELECTED_WORLD_PROP, SET_NUM_BARS } from '../actionTypes';

const initialState = {
  data: [],
  numBars: 10,
  selectedProp: 'cases'
};

export default function (state = initialState, action: { type: string, payload?: any }) {
  switch (action.type) {
    case LOAD_WORLD_DATA:
      return {
        ...state,
        data: action.payload
      };
    case SET_SELECTED_WORLD_PROP:
      return {
        ...state,
        selectedProp: action.payload
      };
    case SET_NUM_BARS:
      return {
        ...state,
        numBars: action.payload
      };
    default:
      return state;
  }
}
