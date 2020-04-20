import { combineReducers } from 'redux';

import currState from './currState';
import world from './world';

export default combineReducers({ currState, world });