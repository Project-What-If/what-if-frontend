import React, { useRef, useState } from 'react';
import RoomForm from './components/RoomForm';

function App() {
    const nextId = useRef(2);
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
    return (
        <div>
            <RoomForm onCreate={handleCreate} />
            {JSON.stringify(rooms)}
        </div>
    );
}

export default App;
