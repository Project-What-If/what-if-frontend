import React from 'react';

function RoomPage({ match, location }) {
    console.log(match.params.roomId);
    return <div>RoomPage - id: {match.params.roomId}</div>;
}

export default RoomPage;
