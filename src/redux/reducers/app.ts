import { SET_MOBILE_OPEN, SET_DARK_MODE, SET_ROWS_PER_PAGE } from '../actionTypes';

const initialState = {
  darkMode: localStorage.getItem('darkMode') === 'true',
  mobileOpen: false,
  rowsPerPage: 10
};

export default function (state = initialState, action: { type: string, payload?: any }) {
  switch (action.type) {
    case SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload
      };
    case SET_MOBILE_OPEN:
      return {
        ...state,
        mobileOpen: action.payload
      };
    case SET_ROWS_PER_PAGE:
      return {
        ...state,
        rowsPerPage: action.payload
      };
    default:
      return state;
  }
}
