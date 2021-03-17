import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { roomActions } from '../../../slice/roomSlice';
import RoomDetail from './Sections/RoomDetail';
import RoomRegister from './RoomRegister/RoomRegister';

function RoomPage({ match, location, ...other }) {
    const dispatch = useDispatch();
    const isEdit = match?.url?.startsWith('/edit') ?? false;

    useEffect(() => {
        dispatch(roomActions.getRoom(match.params.roomId));
    }, [match.params.roomId]);

    useEffect(() => {
        console.log(`isEdit is ${isEdit}`);
    }, [isEdit]);

    const { id, title, tag, content, image, imageURL } = useSelector(state => ({
        id: state.roomReducers.id,
        title: state.roomReducers.title,
        tag: state.roomReducers.tag,
        content: state.roomReducers.content,
        image: state.roomReducers.image,
        imageURL: state.roomReducers.imageURL,
    }));
    const date = useSelector(state => state.roomReducers.date);
    const views = useSelector(state => state.roomReducers.views);

    const stateForProps = useSelector(state => state.roomReducers);

    const res = isEdit ? (
        <RoomRegister isforUpdate={true} id={id} title={title} tag={tag} content={content} image={image} imageURL={imageURL} />
    ) : (
        <div style={{ width: '80%', margin: '3rem auto' }}>
            <RoomDetail id={id} title={title} tag={tag} content={content} imageURL={imageURL} views={views} date={date} />
            <div style={{ margin: '2rem auto' }}>
                <Link
                    to={{
                        pathname: `/edit/${id}`,
                        search: '',
                        state: {
                            id: id,
                            title: title,
                            tag: tag,
                            content: content,
                            imageURL: imageURL,
                        },
                    }}
                >
                    <Button type="primary">수정</Button>
                </Link>
            </div>
        </div>
    );

    return res;
}

export default RoomPage;
