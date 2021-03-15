import React from 'react';
import { Button, Input } from 'antd';

const { TextArea } = Input;

function RoomRegisterOrEdit(props) {
    // let profilePreview = null;
    // if (props.imageValue !== null) {
    //     profilePreview = <img className="image_preview" src={props.imageURLValue} width="250" height="250"></img>;
    // }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <form onSubmit={props.handleSubmit}>
                <br />
                <div style={{ maxWidth: '700px', margin: '2rem' }}>
                    <Input onChange={props.handleTitleChange} value={props.titleValue} type="text" name="title" placeholder=":제목을 입력하세요" />
                    <hr></hr>
                    <Input onChange={props.handleTagChange} value={props.tagValue} type="text" name="tag" placeholder="#태그를 입력해주세요(최대 3개)" />
                    <hr></hr>
                    <div>
                        <TextArea onChange={props.handleContentChange} value={props.contentValue} name="content" />
                    </div>
                    <Input onChange={props.handleImageChange} accept="image/jpg,image/png,image/jpeg,image/gif" type="file" name="image" />
                    {props.imagePreview}
                </div>
                <Button type="danger" onClick={props.handleSubmit}>
                    {props.updateRequest ? '수정' : '등록'}
                </Button>
            </form>
        </div>
    );
}

export default RoomRegisterOrEdit;
