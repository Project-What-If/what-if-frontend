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
