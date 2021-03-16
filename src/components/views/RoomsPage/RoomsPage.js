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

    const rooms = useSelector(state => state.roomsReducers.rooms);

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div>
                <Title>Best</Title>
            </div>
            <div>
                <Button type="primary" onClick={() => onCheck(!check)}>
                    +
                </Button>
                {check && <RoomRegister />}
            </div>
            <div>
                <RoomsList rooms={rooms} />
            </div>
        </div>
    );
}

export default RoomsPage;
