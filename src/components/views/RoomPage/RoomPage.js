import React from 'react';
import RoomList from './RoomList/RoomList';

function RoomPage() {
    return (
        <div>
            <div>
                <h1>Best</h1>
            </div>
            <div>
                <button>+</button>
            </div>
            <div>
                <RoomList />
            </div>
        </div>
    );
}

export default RoomPage;
