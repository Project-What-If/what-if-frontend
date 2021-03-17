import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { roomActions } from '../../../../slice/roomSlice';
import RoomRegisterOrEdit from './Sections/RoomRegisterOrEdit';

function RoomRegister({ isforUpdate, id, title, tag, content, image, imageURL }) {
    const dispatch = useDispatch();

    const { views, date, editDate } = useSelector(state => ({
        views: state.roomReducers.views,
        date: state.roomReducers.date,
        editDate: '',
    }));

    const [TitleValue, setTitleValue] = useState(title ?? '');
    const [TagValue, setTagValue] = useState(tag ?? '');
    const [ContentValue, setContentValue] = useState(content ?? '');
    const [ImageValue, setImageValue] = useState(image ?? null);
    const [ImageURLValue, setImageURLValue] = useState(imageURL ?? '');
    // const ImageRef = useRef();

    const [IsForUpdate, setIsForUpdate] = useState(isforUpdate ?? false);

    const onTitleChange = event => {
        setTitleValue(event.currentTarget.value);
    };
    // console.log(TitleValue);

    const onTagChange = event => {
        setTagValue(event.currentTarget.value);
    };
    // console.log(TagValue);

    const onContentChange = event => {
        setContentValue(event.currentTarget.value);
    };
    // console.log(ContentValue);

    const onImageChange = event => {
        event.preventDefault();
        const reader = new FileReader();
        const file = event.target.files[0];
        if (file) {
            reader.readAsDataURL(file);
        }
        reader.onloadend = () => {
            const newFile = {};
            for (const key in file) {
                newFile[key] = file[key];
            }
            console.log(newFile);
            setImageValue(newFile);
            setImageURLValue(reader.result);
        };
    };

    const imagePreview = ImageURLValue ? <img className="image_preview" src={ImageURLValue} width="250" height="250"></img> : null;

    const handleRoom = IsForUpdate ? roomActions.putRoom : roomActions.registerRoom;

    const onSubmitRoom = event => {
        event.preventDefault();
        if (TitleValue === '' || TitleValue === null || TitleValue === undefined) {
            alert('제목을 작성하십시오.');
            return false;
        }
        if (TagValue === '' || TagValue === null || TagValue === undefined) {
            alert('태그를 작성하십시오.');
            return false;
        }
        if (ContentValue === '' || ContentValue === null || ContentValue === undefined) {
            alert('내용을 작성하십시오.');
            return false;
        }
        if (ImageValue === '' || ImageValue === null || ImageValue === undefined) {
            alert('이미지를 넣으십시오.');
            return false;
        }

        const room = {
            title: TitleValue,
            tag: TagValue,
            content: ContentValue,
            image: ImageValue,
            imageURL: ImageURLValue,
            views,
            date,
            editDate,
        };
        if (id) {
            room.id = id;
        }
        dispatch(handleRoom(room));

        // 초기화
        setTitleValue('');
        setTagValue('');
        setContentValue('');
        setImageValue(null);
        setImageURLValue('');
        return true;
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
