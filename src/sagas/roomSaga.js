import { call, put, getContext } from 'redux-saga/effects';
import Axios from 'axios';
import { roomActions } from '../slice/roomSlice';
import history from '../utils/history';

export function* registerRoomAsync(action) {
    const data = action.payload;

    // const postedData = yield Axios.post(`http://localhost:4000/room`, data);
    const response = yield Axios.post(`http://localhost:4000/room`, data);

    yield alert('저장되었습니다.');

    console.log(response.data.id);

    // yield history.push(`/room/${response.data.id}`);

    history.push(`/room/${response.data.id}`, response.data.id);

    // history.push(url, object) 일 경우 object는 state로 보내짐
}
