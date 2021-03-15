import { Tag } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { roomActions } from '../../../../slice/roomSlice';
import RoomRegisterOrEdit from './Sections/RoomRegisterOrEdit';

function RoomRegister() {
    const dispatch = useDispatch();

    const [TitleValue, setTitleValue] = useState('');
    const [TagValue, setTagValue] = useState('');
    const [ContentValue, setContentValue] = useState('');
    const [ImageValue, setImageValue] = useState('');

    const [IsForUpdate, setIsForUpdate] = useState(false);

    const onTitleChange = event => {
        setTitleValue(event.currentTarget.value);
    };
    console.log(TitleValue);

    const onTagChange = event => {
        setTagValue(event.currentTarget.value);
    };
    console.log(TagValue);

    const onContentChange = event => {
        setContentValue(event.currentTarget.value);
    };
    console.log(ContentValue);

    const onImageChange = event => {
        setImageValue(event.currentTarget.value);
    };

    const onSubmitRoom = event => {
        event.preventDefault();
        const room = { title: TitleValue, tag: TagValue, content: ContentValue, image: ImageValue };
        dispatch(roomActions.registerRoom(room));
    };

    return (
        <>
            <RoomRegisterOrEdit
                titleValue={TitleValue}
                tagValue={TagValue}
                contentValue={ContentValue}
                imageValue={ImageValue}
                handleTitleChange={onTitleChange}
                handleTagChange={onTagChange}
                handleContentChange={onContentChange}
                handleImageChange={onImageChange}
                handleSubmit={onSubmitRoom}
                updateRequest={IsForUpdate}
            />
        </>
    );
}

export default RoomRegister;
