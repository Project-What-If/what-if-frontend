import React from 'react';

function RoomDetail(props) {
    return (
        <div style={{ width: '80%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>방</h1>
            </div>
            <div>
                <table>
                    <colgroup>
                        <col width="10%" /> <col width="40%" /> <col width="10%" /> <col width="40%" />
                    </colgroup>
                    <tr>
                        <th>번호</th> <td>{props.id}</td> <th>조회수</th> <td>{props.views}</td>
                    </tr>
                    <tr>
                        <th>제목</th> <td colspan="3">{props.title}</td>
                    </tr>
                    <tr>
                        <th>태그</th> <td colspan="3">{props.tag}</td>
                    </tr>
                    <tr>
                        <th>이미지URL</th>
                        <td colspan="3">
                            <img className="image" src={props.imageURL} width="250" height="250"></img>
                        </td>
                    </tr>
                    <tr>
                        <th>내용</th> <td colspan="3">{props.content}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default RoomDetail;
