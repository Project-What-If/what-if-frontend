import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function RoomInfo(props) {
    const style = {
        maxWidth: '540px',
    };

    const [modify, setModify] = useState({
        // 우리는 수정 버튼을 눌렀을 떄 editing 값을 true 로 설정해줄것입니다.
        // 이 값이 true 일 때에는, 기존에 텍스트 형태로 보여주던 값들을
        // input 형태로 보여주게 됩니다.
        editing: false,
        // input 의 값은 유동적이겠지요? input 값을 담기 위해서 각 필드를 위한 값도
        // 설정합니다
        title: '제목입니다.',
        content: '',
        image: '',
        imageURL: '',
        tag: '',
    });

    const handleRemove = () => {
        const { room, onRemove } = props;
        onRemove(room.id);
    };

    const handleToggleEdit = () => {
        const { editing } = modify;
        setModify({ ...modify, editing: !editing });
    };

    const handleChange = e => {
        const { value, name } = e.target;
        setModify({
            ...modify,
            [name]: value,
        });
    };

    // useEffect(() => {
    //     const { room, onUpdate } = props;
    //     if (modify.editing === true) {
    //         setModify({
    //             title: room.title,
    //             content: room.content,
    //             image: room.image,
    //             imageURL: room.imageURL,
    //             tag: room.tag,
    //         });
    //     } else {
    //         console.log('false일때입니다.');
    //     }
    //     console.log(modify.editing);
    // }, [modify.editing]);

    const { editing } = modify;
    if (editing) {
        console.log('title은', modify.title);
        return (
            <div style={style}>
                <div>
                    <input value={modify.title} name="title" placeholder="제목" onChange={handleChange} />
                </div>
                <div>
                    <input value={modify.content} name="content" placeholder="내용" onChange={handleChange} />
                </div>
                {/* <div>
                    <input accept="image/jpg,image/png,image/jpeg,image/gif" type="file" name="image" placeholder="이미지" onChange={fileHandler} ref={imageInput} />
                </div> */}
                <div>
                    <input value={modify.tag} name="tag" placeholder="태그" onChange={handleChange} />
                </div>
                <button onClick={handleToggleEdit} className="btn btn-success">
                    적용
                </button>
                <button onClick={handleRemove} className="btn btn-danger">
                    삭제
                </button>
            </div>
        );
    }

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
                <button onClick={handleToggleEdit} className="btn btn-warning">
                    수정
                </button>
                <button onClick={handleRemove} className="btn btn-danger">
                    삭제
                </button>
            </div>
        </div>
    );
}
// RoomInfo.defaultProps = {
//     room: {
//         // undefined 방지
//         title: '',
//         content: '',
//         image: '',
//         imageURL: '',
//         tag: '',
//         id: 0,
//     },
// };

export default RoomInfo;
