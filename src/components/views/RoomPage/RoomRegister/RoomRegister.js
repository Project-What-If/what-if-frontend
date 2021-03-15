import { Tag } from 'antd';
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { roomActions } from '../../../../slice/roomSlice';
import RoomRegisterOrEdit from './Sections/RoomRegisterOrEdit';

function RoomRegister() {
    const dispatch = useDispatch();

    const [TitleValue, setTitleValue] = useState('');
    const [TagValue, setTagValue] = useState('');
    const [ContentValue, setContentValue] = useState('');
    const [ImageValue, setImageValue] = useState(null);
    const [ImageURLValue, setImageURLValue] = useState('');
    // const ImageRef = useRef();

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
        event.preventDefault();
        const reader = new FileReader();
        const file = event.target.files[0];
        if (file) reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageValue(file);
            setImageURLValue(reader.result);
        };
    };

    let imagePreview = null;
    if (ImageValue !== null) {
        imagePreview = <img className="image_preview" src={ImageURLValue} width="250" height="250"></img>;
    }

    const onSubmitRoom = event => {
        event.preventDefault();
        const room = { title: TitleValue, tag: TagValue, content: ContentValue, image: ImageValue, imageURL: ImageURLValue };
        dispatch(roomActions.registerRoom(room));
        setTitleValue('');
        setTagValue('');
        setContentValue('');
        setImageValue(null);
        setImageURLValue('');
        // ImageRef.current.value = '';
    };

    return (
        <>
            <RoomRegisterOrEdit
                titleValue={TitleValue}
                tagValue={TagValue}
                contentValue={ContentValue}
                imageValue={ImageValue}
                imageURLValue={ImageURLValue}
                // imageRef={ImageRef}
                imagePreview={imagePreview}
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