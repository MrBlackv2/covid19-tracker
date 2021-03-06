import { LOAD_WORLD_DATA, SET_SELECTED_WORLD_PROP, SET_NUM_BARS, SET_ACTIVE_WORLD_PROPS, SET_WORLD_SEARCH, SET_WORLD_ORDER, SET_WORLD_ORDER_BY } from '../actionTypes';
import { getWorldDataProps } from '../../types/WorldData';

const initialState = {
  data: [],
  activeProps: getWorldDataProps().map(prop => prop.id),
  numBars: 10,
  selectedProp: 'cases',
  search: '',
  order: 'asc',
  orderBy: 'country'
};

export default function (state = initialState, action: { type: string, payload?: any }) {
  switch (action.type) {
    case LOAD_WORLD_DATA:
      return {
        ...state,
        data: action.payload
      };
    case SET_ACTIVE_WORLD_PROPS:
      return {
        ...state,
        activeProps: action.payload
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
    case SET_WORLD_SEARCH:
      return {
        ...state,
        search: action.payload
      };
    case SET_WORLD_ORDER:
      return {
        ...state,
        order: action.payload
      };
    case SET_WORLD_ORDER_BY:
      return {
        ...state,
        orderBy: action.payload
      };
    default:
      return state;
  }
}
