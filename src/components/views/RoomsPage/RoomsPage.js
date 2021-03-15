import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Typography } from 'antd';
import RoomsList from './RoomsList/RoomsList';
import RoomRegister from '../RoomPage/RoomRegister/RoomRegister';

const { Title } = Typography;

function RoomsPage() {
    const [check, onCheck] = useState(false);
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
                <RoomsList />
            </div>
        </div>
    );
}

export default RoomsPage;
