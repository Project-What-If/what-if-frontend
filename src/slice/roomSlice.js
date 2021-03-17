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
        editDate: '',
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
            console.log('saga에서 put 액션 호출 -- getRoomAsync');
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
        putRoom: (state, { payload: room }) => {
            console.log('방 수정 액션 호출 -- putRoom'); // saga에서 감시용
        },
        putRoomAsync: (state, { payload: room }) => {
            console.log(room);
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
        fetchRoom: (state, { payload: id }) => {
            console.log('방 조회 액션 호출 -- fetchRoom'); // saga에서 감시용
        },
        deleteRoom: (state, { payload: id }) => {
            console.log('방 삭제 액션 호출 -- deleteRoom'); // saga에서 감시용
        },
    },
});

export const roomReducers = roomSlice.reducer;
export const roomActions = roomSlice.actions;
