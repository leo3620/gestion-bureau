import React, {useContext} from 'react'
import {Tooltip} from "antd";
import {useDrop} from "react-dnd";

import '../css/building.scss';
import {RoomsContext} from "../RoomsContext";

function Desk(props) {

    const rooms = useContext(RoomsContext);

    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
            accept: 'USER',
            canDrop: () => {return (props.roomSelected.capacity - props.roomSelected.users.length) > 0},
            drop: (item) => {
                const roomsTemp = JSON.parse(JSON.stringify(rooms));
                const index2 = roomsTemp.findIndex(u => u.id === props.roomSelected.id);
                const tempRoom = roomsTemp[index2]
                tempRoom.users.push({value: item.user.value});

                props.setRooms(roomsTemp);
            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop()
            })
        }),
        [rooms]
    )

    return (
     <Tooltip title={props.title}>
        <div className={`${props.room.blocType} ${props.clicked} desktop ${isOver && canDrop? 'isOver' : ''} ${props.roomSelected.type}`} onClick={props.onClick} ref={drop}>
            <span> {props.roomSelected.name}</span>
            <span> {props.roomSelected.users.length} / {props.roomSelected.capacity}</span>
        </div>
    </Tooltip>
    )
}

export default Desk
