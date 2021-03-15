import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import RoomsList from './RoomsList/RoomsList';
import RoomRegister from '../RoomPage/RoomRegister/RoomRegister';

function RoomsPage() {
    const [check, onCheck] = useState(false);
    return (
        <div>
            <div>
                <h1>Best</h1>
            </div>
            <div>
                <button onClick={() => onCheck(!check)}>+</button>
                {check && <RoomRegister />}
            </div>
            <div>
                <RoomsList />
            </div>
        </div>
    );
}

export default RoomsPage;
