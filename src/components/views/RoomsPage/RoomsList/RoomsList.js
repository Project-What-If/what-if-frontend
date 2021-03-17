import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';

function RoomsList(props) {
    console.log(props.rooms);
    return (
        <div>
            <table>
                <colgroup>
                    <col width="10%" /> <col width="10%" /> <col width="40%" /> <col width="40%" />
                </colgroup>
                <tr>
                    <th>번호</th> <th>제목</th> <th>조회수</th>
                </tr>
                {props.rooms.map(room => (
                    <tr>
                        <td>{room.id}</td>
                        <Link to={`/room/${room.id}`}>
                            <td>{room.title}</td>
                        </Link>
                        <td>{room.views}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default RoomsList;
