import React from 'react'
import { useDrag } from 'react-dnd'
import '../css/user.scss';
import {DragOutlined} from "@ant-design/icons";

function User({user}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'USER',
        item: {user: user},
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        <div
            className="user-draggable"
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 15,
                cursor: 'move',
            }}
        >
            <DragOutlined className="iconDrag"/>
            {user.value}
        </div>
    )
}

export default User
