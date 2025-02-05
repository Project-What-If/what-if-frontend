import React from 'react';

function Comment({ comment, handleCommentChange, handleCommentSubmit }) {
    console.log(comment);

    return (
        <>
            <form onSubmit={handleCommentSubmit}>
                <div style={{ border: '1px solid black' }}>
                    <textarea
                        style={{
                            borderStyle: 'none none dashed none',
                            borderColor: 'black',
                            width: '100%',
                            display: 'block',
                            boxSizing: 'border-box',
                            borderWidth: '1px',
                            marginBottom: '1px',
                        }}
                        value={comment}
                        onChange={handleCommentChange}
                    />
                    <div
                        style={{
                            width: '100%',
                            boxSizing: 'border-box',
                            height: '35px',
                            padding: '5px',
                        }}
                    >
                        <button
                            style={{
                                border: 'none',
                                width: '100%',
                                float: 'right',
                            }}
                        >
                            댓글 등록
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Comment;
