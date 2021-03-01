import React, { useState } from 'react';

function RoomForm(props) {
    const [inputs, setInputs] = useState({
        title: '',
        content: '',
        image: '',
        imageURL: '',
        tag: '',
    });

    const { title, content, image, imageURL, tag } = inputs;

    const handleChange = e => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onCreate(inputs);
        setInputs({
            title: '',
            content: '',
            image: '',
            imageURL: '',
            tag: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <textarea placeholder="제목" class="form-control" id="exampleFormControlTextarea1" rows="1" value={title} onChange={handleChange} name="title"></textarea>
            </div>
            <div className="form-group">
                <textarea placeholder="본문" class="form-control" id="exampleFormControlTextarea1" rows="3" value={content} onChange={handleChange} name="content"></textarea>
            </div>
            {/* <div className="form-group">
                <input
                    accept="image/jpg,image/png,image/jpeg,image/gif"
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                    onChange={this.fileHandler}
                    name="image"
                    ref={this.imageInput}
                />
                {profile_preview}
            </div> */}
            <div className="form-group">
                <textarea placeholder="태그" class="form-control" id="exampleFormControlTextarea1" rows="3" value={tag} onChange={handleChange} name="tag"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
                등록
            </button>
        </form>
    );
}

export default RoomForm;
