import { combineReducers } from 'redux';

import currState from './currState';
import histState from './histState';
import world from './world';

export default combineReducers({ currState, histState, world });