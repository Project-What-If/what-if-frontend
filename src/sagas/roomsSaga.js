import { call, put } from 'redux-saga/effects';
import Axios from 'axios';
import { roomsActions } from '../slice/roomsSlice';

export function* getRoomsAsync() {
    try {
        const response = yield Axios.get(`http://localhost:4000/room`);
        yield put(roomsActions.getRoomsAsync(response.data));
    } catch (e) {
        yield put(roomsActions.getRoomsFailedAsync(e.message));
    }
    // 조회 실패 시 payload로 boardSaga에서 발생할 error 메시지
}
