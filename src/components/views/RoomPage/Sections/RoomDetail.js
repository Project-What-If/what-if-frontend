import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from 'antd';

const { Title } = Typography;

function RoomDetail(props) {
    return (
        <div>
            <div style={{ margin: '2rem auto' }}>
                <a href="/">
                    <Button type="primary">목록으로 가기</Button>
                </a>
            </div>

            <div style={{ textAlign: 'center' }}>
                <Title>{id}번째 방</Title>
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
