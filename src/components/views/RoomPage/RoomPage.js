import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { roomActions } from '../../../slice/roomSlice';
import RoomDetail from './Sections/RoomDetail';

function RoomPage({ match, location }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(roomActions.getRoom(match.params.roomId));
    }, [match.params.roomId]);

    const { id, title, tag, content, image, imageURL } = useSelector(state => ({
        id: state.roomReducers.id,
        title: state.roomReducers.title,
        tag: state.roomReducers.tag,
        content: state.roomReducers.content,
        // image: state.roomReducers.image,
        imageURL: state.roomReducers.imageURL,
    }));
    const date = useSelector(state => state.roomReducers.date);
    const views = useSelector(state => state.roomReducers.views);

    return (
        <div>
            <RoomDetail id={id} title={title} tag={tag} content={content} imageURL={imageURL} views={views} date={date} />
        </div>
    );
}

export default RoomPage;
