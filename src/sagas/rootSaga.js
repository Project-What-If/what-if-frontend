// saga도 기능별로 만들 수 있으므로 rootSaga 하나 둠
import { takeEvery, takeLatest } from 'redux-saga/effects';
import { roomActions } from '../slice/roomSlice';
import { roomsActions } from '../slice/roomsSlice';
import { registerRoomAsync, getRoomAsync } from './roomSaga';
import { getRoomsAsync } from './roomsSaga';

const { registerRoom, getRoom } = roomActions;
const { getRooms } = roomsActions;

export default function* rootWatcher() {
    yield takeLatest(registerRoom.type, registerRoomAsync);
    yield takeEvery(getRoom.type, getRoomAsync);
    yield takeEvery(getRooms.type, getRoomsAsync);
}
