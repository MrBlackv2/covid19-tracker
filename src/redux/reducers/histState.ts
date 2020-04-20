import { LOAD_HIST_STATE_DATA, SET_SELECTED_HIST_STATE, SET_SELECTED_HIST_PROP } from '../actionTypes';

const initialState = {
  data: [],
  selectedState: '',
  selectedProp: 'positive'
};

export default function (state = initialState, action: { type: string, payload?: any }) {
  switch (action.type) {
    case LOAD_HIST_STATE_DATA:
      let selectedState = state.selectedState;
      if (action.payload && action.payload.length > 0 && state.selectedState === '') {
        selectedState = action.payload[0].state;
      }
      return {
        ...state,
        data: action.payload,
        selectedState
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
