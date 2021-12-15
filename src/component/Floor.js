import {Button, Tooltip} from "antd";
import {DownCircleOutlined, UpCircleOutlined} from "@ant-design/icons";
import '../css/floor.scss';
function Floor(props) {

    function changeFloorEvent(dir) {
        if(dir === 'up') {
            props.setFloor(prev => (prev < 2 ? prev + 1 : 2))
            props.setRoom({})
        } else {
            props.setFloor(prev => (prev > 0 ? prev - 1 : 0))
            props.setRoom({})
        }
    }

    return (
        <div className="floor">
            <div className="floor-button">
                <Tooltip title="Etage supérieur">
                    <Button type="primary" shape="circle" icon={<UpCircleOutlined />} onClick={() => changeFloorEvent('up')} disabled={props.floor > 1}/>
                </Tooltip>
                <Tooltip title="Etage inférieur" placement='bottom'>
                    <Button type="primary" shape="circle" icon={<DownCircleOutlined />} onClick={() => changeFloorEvent('down')} disabled={props.floor === 0}/>
                </Tooltip>
            </div>
            ÉTAGE {props.floor}
            <div className="legend">
                <div>
                    <div className='legendType standard'/>
                    Type standard
                </div>
                <div>
                    <div className='legendType labo'/>
                    Type Laboratoire
                </div>
            </div>
        </div>
    );
}

export default Floor;
