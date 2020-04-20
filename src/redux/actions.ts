import * as actionTypes from './actionTypes';
import { WorldData } from '../types/WorldData';
import { CurrStateData } from '../types/CurrStateData';
import { HistStateData } from '../types/HistStateData';

export const setDarkMode = (payload: boolean) => ({
  type: actionTypes.SET_DARK_MODE,
  payload
});

export const setMobileOpen = (payload: boolean) => ({
  type: actionTypes.SET_MOBILE_OPEN,
  payload
});

export const loadWorldData = (payload: WorldData[]) => ({
  type: actionTypes.LOAD_WORLD_DATA,
  payload
});

export const setSelectedWorldProp = (payload: string) => ({
  type: actionTypes.SET_SELECTED_WORLD_PROP,
  payload
});

export const setNumBars = (payload: number) => ({
  type: actionTypes.SET_NUM_BARS,
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

export const setSelectedHistState = (payload: string) => ({
  type: actionTypes.SET_SELECTED_HIST_STATE,
  payload
});

export const setSelectedHistProp = (payload: string) => ({
  type: actionTypes.SET_SELECTED_HIST_PROP,
  payload
});
