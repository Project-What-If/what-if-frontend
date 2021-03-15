import React from 'react';

function RoomRegisterOrEdit(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <br />
                <input onChange={props.handleTitleChange} value={props.titleValue} type="text" name="title" placeholder=":제목을 입력하세요" />
                <hr></hr>
                <input onChange={props.handleTagChange} value={props.tagValue} type="text" name="tag" placeholder="#태그를 입력해주세요(최대 3개)" />
                <hr></hr>
                <div>
                    <textArea onChange={props.handleContentChange} value={props.contentValue} name="content" />
                </div>
                <input onChange={props.handleImageChange} accept="image/jpg,image/png,image/jpeg,image/gif" type="file" name="image" />
                <button onClick={props.handleSubmit}>{props.updateRequest ? '수정' : '등록'}</button>
            </form>
        </div>
    );
}

export default RoomRegisterOrEdit;
