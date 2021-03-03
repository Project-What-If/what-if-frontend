import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function RoomForm(props) {
    const [inputs, setInputs] = useState({
        title: '',
        content: '',
        image: '',
        imageURL: '',
        tag: '',
    });
    const imageInput = React.createRef();

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
        imageInput.current.value = '';
    };

    const fileHandler = e => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            setInputs({
                image: file,
                imageURL: reader.result,
            });
        };
        if (file) reader.readAsDataURL(file);
    };

    let profilePreview = null;
    if (image !== '') {
        profilePreview = <img className="image_preview" src={imageURL} width="250" height="250"></img>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <textarea placeholder="제목" class="form-control" id="exampleFormControlTextarea1" rows="1" value={title} onChange={handleChange} name="title"></textarea>
            </div>
            <div className="form-group">
                <textarea placeholder="본문" class="form-control" id="exampleFormControlTextarea1" rows="3" value={content} onChange={handleChange} name="content"></textarea>
            </div>
            <div className="form-group">
                <input accept="image/jpg,image/png,image/jpeg,image/gif" type="file" class="form-control-file" id="exampleFormControlFile1" onChange={fileHandler} name="image" ref={imageInput} />
                {profilePreview}
            </div>
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
