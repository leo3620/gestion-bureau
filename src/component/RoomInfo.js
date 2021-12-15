import '../css/roomInfo.scss';
import {AutoComplete, Button, Input, Tooltip} from "antd";
import {useContext, useEffect, useState} from "react";
import {DeleteOutlined} from "@ant-design/icons";
import {RoomsContext} from "../RoomsContext";

function RoomInfo(props) {


    const [options, setOptions] = useState([]);
    const [value, setValue] = useState('');
    const rooms = useContext(RoomsContext);

    const onChange = (data) => {
        setValue(data)
    };

    const onSelect = (user) => {
            props.addUser(user);
            setValue('');
    };

    const isAvailable = (user) => {
         return !rooms.filter(r => r.users.filter (u => u.value === user ).length > 0).length > 0;
    }

    const onSearch = (searchText) => {
        let filtered = props.users.filter(name => (name.value.toLowerCase().startsWith(searchText.toLowerCase()) || name.value.split(' ')[1].toLowerCase().startsWith(searchText.toLowerCase()))  && isAvailable(name.value));
        setOptions(filtered)
    };

    const onFocus = () => {
        setOptions([])
    };


    const deleteUser = (user) => {
      props.removeUser(user);
    };


    useEffect(()=> {setValue('')}, [props.room, rooms])

    return (
       <div className="roomInfo">
           {Object.keys(props.room).length !== 0 ?
               <div>
                   <h1>SALLE : {props.room.name}</h1>

                   <div className='centered'>
                       <span>{
                           props.room.capacity - props.room.users.length
                       } places disponible{props.room.capacity - props.room.users.length > 1 ? 's' :''}</span>
                   </div>
                   <div className='fields'>
                       <span className='field-legend'>Type:</span>
                       <span>{props.room.type}</span>
                   </div>
                   <div className='fields'>
                       <span className='field-legend'>Capacité:</span>
                       <span>{props.room.capacity}</span>
                   </div>
                   <div className='fields'>
                       <span className='field-legend'>Occupants:</span>
                       {
                          props.room.users.map(user => {
                              return <div className='user-array' key={'USER-ARRAY' + user.value}>
                                  <Tooltip title="Supprimer">
                                      <Button danger shape="circle" icon={<DeleteOutlined />} size='small' onClick={() => deleteUser(user)} />
                                  </Tooltip>
                                  {user.value}
                              </div>
                          })
                       }

                       <div className='fields'>
                           {props.room.capacity > props.room.users.length ?
                           <AutoComplete
                               dropdownMatchSelectWidth={120}
                               style={{width: 300, padding: 10}}
                               options={options}
                               value={value}
                               onChange={onChange}
                               onSearch={onSearch}
                               onSelect={onSelect}
                               onFocus={onFocus}
                           >
                               <Input.Search size="medium" placeholder="Ajouter un occupant"/>
                           </AutoComplete>
                               :''
                           }
                       </div>

                   </div>
                   <div className='fields'>
                       <span className='field-legend'>Autres informations:</span><br/>
                       <span>{props.room.infos}</span>
                   </div>
               </div> :
               <div className='toClick'>
               Veuillez cliquer sur une salle
               </div>
           }
       </div>
    );
}

export default RoomInfo;
