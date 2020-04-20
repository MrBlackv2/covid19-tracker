import { SET_MOBILE_OPEN, SET_DARK_MODE } from '../actionTypes';

const initialState = {
  darkMode: localStorage.getItem('darkMode') === 'true',
  mobileOpen: false
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
    default:
      return state;
  }
}
