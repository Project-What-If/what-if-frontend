import { call, put } from 'redux-saga/effects';
import Axios from 'axios';
import { roomsActions } from '../slice/roomsSlice';

export function* getRoomsAsync() {
    const response = yield Axios.get(`http://localhost:4000/room`);

    yield put(roomsActions.getRoomsAsync(response.data));
}
