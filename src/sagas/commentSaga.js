import Axios from 'axios';
import { put } from 'redux-saga/effects';
import history from '../utils/history';
import { commentActions } from '../slice/commentSlice';

export function* registerCommentAsync(action) {
    const data = action.payload;
    yield Axios.post(`http://localhost:4000/comment`, data);
    history.go(0); // refresh 해주는 것
}

export function* getCommentsAsync(action) {
    const roomId = action.payload;
    const response = yield Axios.get(
        `http://localhost:4000/comment?roomId=${roomId}`,
    );
    yield put(commentActions.getCommentsAsync(response.data));
}
