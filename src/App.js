import React, { useRef, useState } from 'react';
import RoomForm from './components/RoomForm';
import RoomInfoList from './components/RoomInfoList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const nextId = useRef(2);
    const [check, onCheck] = useState(false);
    const [rooms, setRooms] = useState([
        {
            id: 1,
            title: '제목입니다',
            content: '본문입니다.',
            image: '사진입니다.',
            imageURL: '',
            tag: 'tag1, tag2',
        },
    ]);
    const handleCreate = data => {
        setRooms(rooms.concat({ id: nextId.current, ...data }));
        nextId.current += 1;
    };
    const handleRemove = id => {
        setRooms(rooms.filter(room => room.id !== id));
    };
    return (
        <div>
            <button onClick={() => onCheck(!check)}>클릭</button>
            {check && <RoomForm onCreate={handleCreate} />}
            <RoomInfoList data={rooms} onRemove={handleRemove} />
        </div>
    );
}

export default App;
