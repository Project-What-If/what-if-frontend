import React, { useState } from 'react';
import RoomInfo from './RoomInfo';

function RoomInfoList(props) {
    const { data, onRemove, onUpdate } = props;
    const list = data.map(room => <RoomInfo key={room.id} room={room} onRemove={onRemove} onUpdate={onUpdate} />);

    return <div>{list}</div>;
}
RoomInfoList.defaultProps = {
    data: [],
    onRemove: () => console.warn('onRemove not defined'),
};
export default RoomInfoList;
