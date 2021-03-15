// rootReducer
import { combineReducers } from 'redux';
import { roomReducers } from './roomSlice';

const rootReducer = combineReducers({ roomReducers });

export default rootReducer;
