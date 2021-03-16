import { call, put, getContext } from 'redux-saga/effects';
import Axios from 'axios';
import { roomActions } from '../slice/roomSlice';

export function* registerRoomAsync(action) {
    const data = action.payload;

    // const postedData = yield Axios.post(`http://localhost:4000/room`, data);
    const response = yield Axios.post(`http://localhost:4000/room`, data);

    yield alert('저장되었습니다.');

    console.log(response.data.id);

    const history = yield getContext('history');

    yield history.push(`/room/${response.data.id}`);
}
