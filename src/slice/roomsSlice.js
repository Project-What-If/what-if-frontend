import { createSlice } from '@reduxjs/toolkit';

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        rooms: [],
        isLoading: true,
        isSuccess: false,
        error: null,
    }, // room 배열 리스트를 가져오는 것이어서 state를 하나하나 지정할 필요 X

    reducers: {
        getRooms: (state, { payload }) => {
            console.log('방 목록 조회 액션 호출 - getRooms');
        },
        getRoomsAsync: (state, { payload: data }) => {
            console.log('saga에서 put 액션 호출 - getRoomsAsyncs');
            return {
                ...state,
                rooms: data,
                isSuccess: true,
                isLoading: false,
            };
        },
        getRoomsFailedAsync: (state, { payload: error }) => {
            console.log('saga에서 put 액션 호출 - getRoomsFailedAsync');
            return {
                ...state,
                isLoading: false,
                error: error,
            };
        },
    },
});

export const roomsReducers = roomsSlice.reducer;
export const roomsActions = roomsSlice.actions;
