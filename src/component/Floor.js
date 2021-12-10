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
                    <Button type="primary" shape="circle" icon={<UpCircleOutlined />} onClick={() => changeFloorEvent('up')} />
                </Tooltip>
                <Tooltip title="Etage inférieur" placement='bottom'>
                    <Button type="primary" shape="circle" icon={<DownCircleOutlined />} onClick={() => changeFloorEvent('down')}/>
                </Tooltip>
            </div>
            ÉTAGE {props.floor}
        </div>
    );
}

export default Floor;
