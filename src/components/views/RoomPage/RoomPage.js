import React from 'react';

function RoomPage({ match, location }) {
    return <div>RoomPage {match.params.roomID}</div>;
}

export default RoomPage;
