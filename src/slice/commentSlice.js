import { createSlice } from '@reduxjs/toolkit';

export const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        id: 0,
        content: '',
        date: Date.now(),
        roomId: 0,
        comments: [],
    },
    reducers: {
        registerComment: (state, { payload: comment }) => {
            console.log('댓글 등록 액션 호출 -- registerComment'); // saga 감시용
        },
        getComments: (state, { payload: roomId }) => {
            console.log('댓글 불러오기 액션 호출 -- getComment'); // saga 감시용
        },
        getCommentsAsync: (state, { payload: list }) => {
            return { ...state, comments: list };
        },
    },
});
export const commentReducers = commentSlice.reducer;
export const commentActions = commentSlice.actions;
