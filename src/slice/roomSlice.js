import { createSlice } from '@reduxjs/toolkit';

export const roomSlice = createSlice({
    name: 'room',
    initialState: { id: 0, title: '', tag: '', content: '', image: null, imageURL: '', views: 0 },
    reducers: {
        registerRoom: (state, room) => {
            console.log(room);
            return { ...room, id: state.id };
        },
        registerRoomAsync: (state, { payload }) => {
            console.log(payload);
            debugger;
            return { ...state, id: payload.id };
        },
    },
});

export const roomReducers = roomSlice.reducer;
export const roomActions = roomSlice.actions;
