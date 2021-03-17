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
            console.log('getRooms 액션 호출');
        },
        getRoomsAsync: (state, { payload: data }) => {
            return {
                ...state,
                rooms: data,
                isSuccess: true,
                isLoading: false,
            };
        },
    },
});

export const roomsReducers = roomsSlice.reducer;
export const roomsActions = roomsSlice.actions;
