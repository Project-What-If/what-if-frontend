import React, { useState, useEffect } from 'react';
import { Button, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import RoomsList from './RoomsList/RoomsList';
import RoomRegister from '../RoomPage/RoomRegister/RoomRegister';
import { roomsActions } from '../../../slice/roomsSlice';

const { Title } = Typography;

function RoomsPage() {
    const [check, onCheck] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(roomsActions.getRooms());
    }, [dispatch]);

    const { rooms, isLoading, isSuccess, error } = useSelector(state => ({
        rooms: state.roomsReducers.rooms,
        isLoading: state.roomsReducers.isLoading,
        isSuccess: state.roomsReducers.isSuccess,
        error: state.roomsReducers.error,
    }));

    const room = <RoomRegister IsForUpdate={false} idParam={undefined} />;

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div>
                <Title>Best</Title>
            </div>
            <div>
                <Button type="primary" onClick={() => onCheck(!check)}>
                    +
                </Button>
                {check && room}
            </div>
            <div>
                {error ? (
                    <h2>에러 발생: {error}</h2>
                ) : isSuccess && rooms.length > 0 ? (
                    <RoomsList rooms={rooms} />
                ) : isSuccess && rooms.length <= 0 ? (
                    <p> 조회할 내용이 없습니다. </p>
                ) : (
                    <p> 목록을 불러오는 중입니다. </p>
                )}
            </div>
        </div>
    );
}

export default RoomsPage;
