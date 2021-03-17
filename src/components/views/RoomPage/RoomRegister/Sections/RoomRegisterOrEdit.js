import React from 'react';
import { Button, Input } from 'antd';

const { TextArea } = Input;

function RoomRegisterOrEdit({ updateRequest, handleSubmit, handleTitleChange, handleTagChange, handleContentChange, handleImageChange, titleValue, tagValue, contentValue, imagePreview }) {
    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <form onSubmit={handleSubmit}>
                <br />
                <div style={{ maxWidth: '700px', margin: '2rem' }}>
                    <Input onChange={handleTitleChange} value={titleValue} type="text" name="title" placeholder=":제목을 입력하세요" />
                    <hr></hr>
                    <Input onChange={handleTagChange} value={tagValue} type="text" name="tag" placeholder="#태그를 입력해주세요(최대 3개)" />
                    <hr></hr>
                    <div>
                        <TextArea onChange={handleContentChange} value={contentValue} name="content" />
                    </div>
                    <Input onChange={handleImageChange} accept="image/jpg,image/png,image/jpeg,image/gif" type="file" name="image" />
                    {imagePreview}
                </div>
                <Button type="danger" onClick={handleSubmit}>
                    {updateRequest ? '수정' : '등록'}
                </Button>
            </form>
        </div>
    );
}

export default RoomRegisterOrEdit;
