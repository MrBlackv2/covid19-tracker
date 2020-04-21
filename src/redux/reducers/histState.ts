import { LOAD_HIST_STATE_DATA, SET_SELECTED_HIST_STATE, SET_SELECTED_HIST_PROP, LOAD_STATES } from '../actionTypes';

const initialState = {
  data: [],
  states: [],
  selectedState: 'AK',
  selectedProp: 'positive'
};

export default function (state = initialState, action: { type: string, payload?: any }) {
  switch (action.type) {
    case LOAD_STATES:
      return {
        ...state,
        states: action.payload
      };
    case LOAD_HIST_STATE_DATA:
      return {
        ...state,
        data: action.payload
      };
    case SET_SELECTED_HIST_STATE:
      return {
        ...state,
        selectedState: action.payload
      };
    case SET_SELECTED_HIST_PROP:
      return {
        ...state,
        selectedProp: action.payload
      };
    default:
      return state;
  }
}
