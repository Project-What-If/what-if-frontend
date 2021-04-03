import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { roomActions } from '../../../slice/roomSlice';
import RoomDetail from './Sections/RoomDetail';
import RoomRegister from './RoomRegister/RoomRegister';
import Comment from './Sections/Comment';
import { commentActions } from '../../../slice/commentSlice';

function RoomPage({ match, location }) {
    const dispatch = useDispatch();
    const isEdit = match?.url?.startsWith('/edit') ?? false;

    const [CommentValue, setCommentValue] = useState('');

    const { id, title, tag, content, image, imageURL, date } = useSelector(
        state => ({
            id: state.roomReducers.id,
            title: state.roomReducers.title,
            tag: state.roomReducers.tag,
            content: state.roomReducers.content,
            image: state.roomReducers.image,
            imageURL: state.roomReducers.imageURL,
            date: state.roomReducers.date,
        }),
        shallowEqual,
    );
    const views = useSelector(state => state.roomReducers.views);

    const onCommentChange = e => {
        setCommentValue(e.currentTarget.value);
    };

    const onCommentSubmit = () => {
        if (!CommentValue) {
            alert('댓글을 입력하세요.');
            return false;
        }
        const comment = {
            id: 0,
            content: CommentValue,
            date: Date.now(),
            roomId: id,
        };

        dispatch(commentActions.registerComment(comment));
    };

    useEffect(() => {
        dispatch(roomActions.getRoom(match.params.roomId));
    }, [match.params.roomId]);

    const onDeleteClick = () => {
        if (!window.confirm('삭제하시겠습니까?')) return false;
        dispatch(roomActions.deleteRoom(id));
    };

    const res = isEdit ? (
        <RoomRegister IsForUpdate={true} idParam={match.params.roomId} />
    ) : (
        <div style={{ width: '80%', margin: '3rem auto' }}>
            <RoomDetail
                id={id}
                title={title}
                tag={tag}
                content={content}
                imageURL={imageURL}
                views={views}
                date={date}
                handleDeleteClick={onDeleteClick}
                handleComment={
                    <Comment
                        comment={CommentValue}
                        handleCommentChange={onCommentChange}
                        handleCommentSubmit={onCommentSubmit}
                    />
                }
            />
        </div>
    );

    return res;
}

export default RoomPage;
