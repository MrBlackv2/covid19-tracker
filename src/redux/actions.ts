import * as actionTypes from './actionTypes';
import { WorldData } from '../types/WorldData';
import { CurrStateData } from '../types/CurrStateData';
import { HistStateData } from '../types/HistStateData';

export const loadWorldData = (payload: WorldData[]) => ({
  type: actionTypes.LOAD_WORLD_DATA,
  payload
});

export const loadCurrStateData = (payload: CurrStateData[]) => ({
  type: actionTypes.LOAD_CURR_STATE_DATA,
  payload
});

export const loadHistStateData = (payload: HistStateData[]) => ({
  type: actionTypes.LOAD_HIST_STATE_DATA,
  payload
});
