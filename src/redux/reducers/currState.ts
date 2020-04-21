import { LOAD_CURR_STATE_DATA, SET_ACTIVE_STATE_PROPS, SET_STATE_SEARCH } from '../actionTypes';
import { getCurrStateProps } from '../../types/CurrStateData';

const initialState = {
  data: [],
  activeProps: getCurrStateProps().map(prop => prop.id),
  search: ''
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
    case SET_STATE_SEARCH:
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
}
