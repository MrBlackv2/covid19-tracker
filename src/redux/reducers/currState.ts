import { LOAD_CURR_STATE_DATA, SET_ACTIVE_STATE_PROPS } from '../actionTypes';
import { getCurrStateProps } from '../../types/CurrStateData';

const initialState = {
  data: [],
  activeProps: getCurrStateProps().map(prop => prop.id)
};

export default function(state = initialState, action: { type: string, payload?: any }) {
  switch (action.type) {
    case LOAD_CURR_STATE_DATA:
      return {
        ...state,
        data: action.payload
      };
    case SET_ACTIVE_STATE_PROPS:
      return {
        ...state,
        activeProps: action.payload
      };
    default:
      return state;
  }
}
