import '../css/building.scss';
import { WarningOutlined} from "@ant-design/icons";
import Desk from "./Desk";
import {useContext, useEffect} from "react";
import {RoomsContext} from "../RoomsContext";


function Building(props) {

    function getRoom(roomId) {
        return rooms.find(room => room.id === roomId);
    }
    function displayRoomInfo(roomID) {
        props.setRoom(getRoom(roomID));
    }

    const rooms = useContext(RoomsContext);



    function draw(floor){
       return  props.building[floor].corridor.map((corridor) => {
            return ( <div className='mainCouloir1' key={corridor.id}>
                {corridor.rooms.map((room) => {
                    if (room.isEmpty) {
                        return <div className="blocEmpty bloc1" key={room.id}
                        />
                    } else {
                        const isClicked = props.room.id === room.id ? 'blockClicked' : '';
                        const roomSelected = rooms.find(r => r.id === room.id);
                        const users = roomSelected.users.length > 0 ?
                         roomSelected.users.map(user => {
                            return <div key={'USER-ROOM-SELECTED' + user.value}>
                                {user.value}
                            </div>
                        }) :
                        'Aucun occupant'
                        return <Desk key={room.id} title={users} room={room} clicked={isClicked}
                                        onClick={() => displayRoomInfo(room.id)} roomSelected={roomSelected} setRooms={props.setRooms}/>
                    }
                })}
            </div>)
        });
    }
    return (
        <div className="building">
            {props.floor === 0 && draw(0)}
            {props.floor === 1 && draw(1)}
            {props.floor === 2 && <div className='warning-building'><WarningOutlined/>&nbsp;ETAGE EN TRAVAUX</div>}
        </div>
    );
}

export default Building;
