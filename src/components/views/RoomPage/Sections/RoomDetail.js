import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from 'antd';

const { Title } = Typography;

function RoomDetail({ id, views, title, tag, imageURL, content, date, handleDeleteClick }) {
    return (
        <div>
            <div style={{ margin: '2rem auto' }}>
                {/* <a href="/"> */}
                <Link to="/">
                    <Button type="primary">목록으로 가기</Button>
                </Link>
                {/* </a> */}
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
                        <th>번호</th> <td>{id}</td> <th>조회수</th> <td>{views}</td>
                    </tr>
                    <tr>
                        <th>제목</th> <td colSpan="3">{title}</td>
                    </tr>
                    <tr>
                        <th>태그</th> <td colSpan="3">{tag}</td>
                    </tr>
                    <tr>
                        <th>이미지URL</th>
                        <td colSpan="3">
                            <div>
                                <img className="image" src={imageURL} height="100%" width="250px" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>내용</th> <td colSpan="3">{content}</td>
                    </tr>
                    <tr>
                        <th>날짜</th> <td colSpan="3">{new Date(date).toLocaleString()}</td>
                    </tr>
                </table>
            </div>
            <div style={{ margin: '2rem auto' }}>
                <Link
                    to={{
                        pathname: `/edit/${id}`,
                        search: '',
                        state: {
                            id: id,
                            title: title,
                            tag: tag,
                            content: content,
                            imageURL: imageURL,
                        },
                    }}
                >
                    <Button type="primary">수정</Button>
                </Link>
            </div>
            <div style={{ margin: 'auto' }}>
                <Button onClick={handleDeleteClick} type="danger">
                    삭제
                </Button>
            </div>
        </div>
    );
}

export default RoomDetail;
