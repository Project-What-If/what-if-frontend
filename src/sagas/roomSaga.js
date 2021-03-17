import { call, put, getContext } from 'redux-saga/effects';
import Axios from 'axios';
import { roomActions } from '../slice/roomSlice';
import history from '../utils/history';

export function* registerRoomAsync(action) {
    const data = action.payload;

    const response = yield Axios.post(`http://localhost:4000/room`, data);

    yield alert('저장되었습니다.');

    console.log(response.data.id);

    history.push(`/room/${response.data.id}`, response.data.id);
}
export function* getRoomAsync(action) {
    const id = action.payload;

    const response = yield Axios.get(`http://localhost:4000/room/${id}`);

    const request = yield Axios.put(`http://localhost:4000/room/${id}`, {
        ...response.data,
        views: parseInt(response.data.views, 10) + 1,
    });

    yield put(roomActions.getRoomAsync(request.data));
} // getArticle 액션을 가로채서 payload로 보낸 id로 게시글을 조회

export function* putRoomAsync(action) {
    const room = action.payload;
    console.log('putRoomAsync', action.payload);
    const response = yield Axios.put(`http://localhost:4000/room/${room.id}`, room);
    yield put(roomActions.putRoomAsync(response.data));

    history.push(`/room/${response.data.id}`, response.data.id);
} // 방(룸) 수정 saga

export function* fetchRoomAsync(action) {
    console.log(action);

    const id = action.payload;

    const response = yield Axios.get(`http://localhost:4000/room/${id}`);

    yield put(roomActions.getRoomAsync(response.data));
}

export function* deleteRoomAsync(action) {
    console.log(action);

    const id = action.payload;

    yield Axios.delete(`http://localhost:4000/room/${id}`);

    console.log(`{id}번 삭제가 완료되었습니다.`);

    history.push('/');
} // 방(룸) 삭제 saga
