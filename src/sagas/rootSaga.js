// saga도 기능별로 만들 수 있으므로 rootSaga 하나 둠
import { takeLatest } from 'redux-saga/effects';
import { roomActions } from '../slice/roomSlice';
import { registerRoomAsync } from './roomSaga';

const { registerRoom } = roomActions;

export default function* rootWatcher() {
    yield takeLatest(registerRoom.type, registerRoomAsync);
}
