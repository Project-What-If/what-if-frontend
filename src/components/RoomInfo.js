import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function RoomInfo(props) {
    const style = {
        'max-width': '540px',
    };
    const handleRemove = () => {
        const { room, onRemove } = props;
        onRemove(room.id);
    };
    const { title, content, image, imageURL, tag, id } = props.room;
    return (
        <div className="card mb-3" style={{ style }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={imageURL} alt="이미지" width="250" height="250"></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{content}</p>
                        <p className="card-text">{tag}</p>
                        <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
                {/* <button onClick={this.handleToggleEdit} className="btn btn-warning">
                    수정
                </button> */}
                <button onClick={handleRemove} className="btn btn-danger">
                    삭제
                </button>
            </div>
        </div>
    );
}
RoomInfo.defaultProps = {
    room: {
        // undefined 방지
        title: '',
        content: '',
        image: '',
        imageURL: '',
        tag: '',
        id: 0,
    },
};

export default RoomInfo;
