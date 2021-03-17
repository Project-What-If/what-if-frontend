import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { roomActions } from '../../../slice/roomSlice';
import RoomDetail from './Sections/RoomDetail';
import RoomRegister from './RoomRegister/RoomRegister';

function RoomPage({ match }) {
    const dispatch = useDispatch();
    const isEdit = match?.url?.startsWith('/edit') ?? false;

    useEffect(() => {
        dispatch(roomActions.getRoom(match.params.roomId));
    }, [match.params.roomId]);

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
    const res = isEdit ? (
        <RoomRegister IsForUpdate={true} idParam={match.params.roomId} />
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
