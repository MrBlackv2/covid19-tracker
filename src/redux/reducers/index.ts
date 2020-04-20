import { combineReducers } from 'redux';

import app from './app';
import currState from './currState';
import histState from './histState';
import world from './world';

export default combineReducers({ app, currState, histState, world });