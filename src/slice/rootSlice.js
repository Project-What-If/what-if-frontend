// rootReducer
import { combineReducers } from 'redux';
import { roomReducers } from './roomSlice';
import { roomsReducers } from './roomsSlice';
import { commentReducers } from './commentSlice';

const rootReducer = combineReducers({
    roomReducers,
    roomsReducers,
    commentReducers,
});

export default rootReducer;
