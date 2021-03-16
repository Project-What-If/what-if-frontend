import { createSlice } from '@reduxjs/toolkit';

export const roomSlice = createSlice({
    name: 'room',
    initialState: {
        id: 0,
        title: '',
        tag: '',
        content: '',
        image: null,
        imageURL: '',
        views: 0,
        date: new Date(Date.now()),
        editDate: new Date(Date.now()),
    },
    reducers: {
        registerRoom: (state, { payload: room }) => {
            console.log(room); // saga 감시용
        },
        // registerRoomAsync: (state, { payload }) => {
        //     console.log(payload);
        //     debugger;
        //     return { ...state, id: payload.id };
        // },
        getRoom: (state, { payload: id }) => {
            console.log(id); // saga 감시용
        },
        getRoomAsync: (state, { payload: room }) => {
            return {
                ...state,
                id: room.id,
                title: room.title,
                tag: room.tag,
                content: room.content,
                image: room.image,
                imageURL: room.imageURL,
                views: room.views,
                date: room.date,
                editDate: room.editDate,
            }; // 실질적으로 내용을 뿌려주는 부분
        },
    },
});

export const roomReducers = roomSlice.reducer;
export const roomActions = roomSlice.actions;
