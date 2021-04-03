import Axios from 'axios';
import history from '../utils/history';

export function* registerCommentAsync(action) {
    const data = action.payload;
    yield Axios.post(`http://localhost:4000/comment`, data);
    history.go(0); // refresh 해주는 것
}
