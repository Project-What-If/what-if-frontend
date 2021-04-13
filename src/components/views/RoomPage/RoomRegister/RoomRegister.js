import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { roomActions } from '../../../../slice/roomSlice';
import RoomRegisterOrEdit from './Sections/RoomRegisterOrEdit';

function RoomRegister({ IsForUpdate, idParam }) {
    const dispatch = useDispatch();

    const {
        id,
        title,
        tag,
        content,
        image,
        imageURL,
        views,
        date,
        editDate,
    } = useSelector(state => ({
        id: state.roomReducers.id,
        title: state.roomReducers.title,
        tag: state.roomReducers.tag,
        content: state.roomReducers.content,
        image: state.roomReducers.image,
        imageURL: state.roomReducers.imageURL,
        views: state.roomReducers.views,
        date: state.roomReducers.date,
        editDate: state.roomReducers.editDate,
    }));

    const initialImage = { name: 'Select Image' };
    const [TitleValue, setTitleValue] = useState('');
    const [TagValue, setTagValue] = useState('');
    const [ContentValue, setContentValue] = useState('');
    const [ImageValue, setImageValue] = useState(initialImage);
    const [ImageURLValue, setImageURLValue] = useState('');

    useEffect(() => {
        if (!IsForUpdate) {
            setTitleValue('');
            setTagValue('');
            setContentValue('');
            setImageValue(initialImage);
            setImageURLValue('');
            return;
        }
        dispatch(roomActions.fetchRoom(idParam));
        console.log(idParam);
    }, [IsForUpdate]);

    const onTitleChange = event => {
        setTitleValue(event.currentTarget.value);
    };

    const onTagChange = event => {
        setTagValue(event.currentTarget.value);
    };

    useEffect(() => {
        if (!IsForUpdate) {
            return;
        }
        setTitleValue(title);
        setTagValue(tag);
        setContentValue(content);
        setImageValue(image);
        setImageURLValue(imageURL);
    }, [title, tag, content, image, imageURL]);

    const onContentChange = event => {
        setContentValue(event.currentTarget.value);
    };

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

    const imagePreview = ImageURLValue ? (
        <div>
            <img
                className="image_preview"
                src={ImageURLValue}
                height="100%"
                width="250px"
            ></img>
        </div>
    ) : null;

    const roomHandler = IsForUpdate
        ? roomActions.putRoom
        : roomActions.registerRoom;

    const queries = ['제목', '태그', '내용', '이미지'];
    const checks = [TitleValue, TagValue, ContentValue, ImageValue];
    const onSubmitRoom = event => {
        event.preventDefault();
        for (let i = 0; i < queries.length; i++) {
            const query = queries[i];
            const check = checks[i];
            if (!check) {
                alert(`${query}를 입력하세요.`);
                return false;
            }
        }

        const room = {
            title: TitleValue,
            tag: TagValue,
            content: ContentValue,
            image: ImageValue,
            imageURL: ImageURLValue,
            views,
            date,
            editDate: new Date(Date.now()),
        };
        if (id) {
            room.id = id;
        }

        setTitleValue('');
        setTagValue('');
        setContentValue('');
        setImageValue(null);
        setImageURLValue('');

        dispatch(roomHandler(room));
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
