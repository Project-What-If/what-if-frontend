// saga도 기능별로 만들 수 있으므로 rootSaga 하나 둠
import { take, takeEvery, takeLatest } from 'redux-saga/effects';
import { roomActions } from '../slice/roomSlice';
import { roomsActions } from '../slice/roomsSlice';
import {
    registerRoomAsync,
    getRoomAsync,
    putRoomAsync,
    fetchRoomAsync,
    deleteRoomAsync,
} from './roomSaga';
import { getRoomsAsync } from './roomsSaga';
import { commentActions } from '../slice/commentSlice';
import { registerCommentAsync, getCommentsAsync } from './commentSaga';

const { registerRoom, getRoom, putRoom, fetchRoom, deleteRoom } = roomActions;
const { getRooms } = roomsActions;
const { registerComment, getComments } = commentActions;

export default function* rootWatcher() {
    yield takeLatest(registerRoom.type, registerRoomAsync);
    yield takeLatest(putRoom.type, putRoomAsync);
    yield takeEvery(getRoom.type, getRoomAsync);
    yield takeEvery(getRooms.type, getRoomsAsync);
    yield takeEvery(fetchRoom.type, fetchRoomAsync);
    yield takeLatest(deleteRoom.type, deleteRoomAsync);
    yield takeLatest(registerComment.type, registerCommentAsync);
    yield takeEvery(getComments.type, getCommentsAsync);
}
