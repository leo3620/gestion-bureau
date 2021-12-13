import React from 'react'
import {Tooltip} from "antd";
import {useDrop} from "react-dnd";

import '../css/building.scss';

function Desk(props) {

    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: 'USER',
            drop: (item) => {
                console.log(item)
            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver()
            })
        }),
        []
    )

    return (
     <Tooltip title={props.title}>
        <div className={`${props.room.blocType} ${props.clicked} desktop ${isOver ? 'isOver' : ''}`} onClick={props.onClick} ref={drop}>
            <span> {props.roomSelected.name}</span>
            <span> {props.roomSelected.users.length} / {props.roomSelected.capacity}</span>
        </div>
    </Tooltip>
    )
}

export default Desk