import { LOAD_CURR_STATE_DATA, SET_ACTIVE_STATE_PROPS, SET_STATE_SEARCH, SET_STATE_ORDER, SET_STATE_ORDER_BY } from '../actionTypes';
import { getCurrStateProps } from '../../types/CurrStateData';

const initialState = {
  data: [],
  activeProps: getCurrStateProps().map(prop => prop.id),
  search: '',
  order: 'asc',
  orderBy: 'state'
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
    case SET_STATE_ORDER:
      return {
        ...state,
        order: action.payload
      };
    case SET_STATE_ORDER_BY:
      return {
        ...state,
        orderBy: action.payload
      };
    default:
      return state;
  }
}
