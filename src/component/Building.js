import '../css/building.scss';
import Icon, {DesktopOutlined, WarningOutlined} from "@ant-design/icons";

function Building(props) {

    function getRoom(roomId) {
        return props.rooms.find(room => room.id === roomId);
    }
    function displayRoomInfo(roomID) {
        props.setRoom(getRoom(roomID));
    }

    function draw(floor){
       return  props.building[floor].corridor.map((corridor) => {
            return ( <div className='mainCouloir1' key={corridor.id}>
                {corridor.rooms.map((room) => {
                    if (room.isEmpty) {
                        return <div className="blocEmpty" key={room.id}
                        />
                    } else {
                        const isClicked = props.room.id === room.id ? 'blockClicked' : '';
                        return <div className={`bloc1 ${isClicked}`} key={room.id} onClick={() => displayRoomInfo(room.id)}/>
                    }
                })}
            </div>)
        });
    }
    return (
        <div className="building">
            {props.floor === 0 && draw(0)}
            {props.floor === 1 && draw(1)}
            {props.floor === 2 && <div><WarningOutlined/>&nbsp;ETAGE EN TRAVAUX</div>}
        </div>
    );
}

export default Building;
