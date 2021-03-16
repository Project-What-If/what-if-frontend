// rootReducer
import { combineReducers } from 'redux';
import { roomReducers } from './roomSlice';
import { roomsReducers } from './roomsSlice';

const rootReducer = combineReducers({ roomReducers, roomsReducers });

export default rootReducer;
