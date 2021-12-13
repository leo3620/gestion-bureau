import '../css/roomInfo.scss';
import {AutoComplete, Button, Input, Tooltip} from "antd";
import {useEffect, useState} from "react";
import {DeleteOutlined} from "@ant-design/icons";

function RoomInfo(props) {

    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);

    let users = [{value :'Léo LECLERC'}, {value: 'Cédric Dumas'}, {value: 'Clémentine Biais'}, {value: 'Thomas Ledoux'}, {value: 'Oscar Gloaguen'}, {value: 'Martine Paul du Nicolas'}, {value: 'Éric de Richard'}, {value: 'Philippe Millet'}, {value: 'Denise de Langlois'}, {value: 'Lucie Grondin de Duval'}, {value: 'Margaud Boucher'}, {value: 'Gabriel Fabre-Morin'}, {value: 'Maryse Seguin-Richard'}, {value: 'Louis du Leger'}, {value: 'Alphonse Weiss-Legendre'}, {value: 'Christiane Simon'}, {value: 'Virginie Benoit'}, {value: 'Renée Camus'}, {value: 'Christelle Baudry de Carlier'}, {value: 'Roger Labbe'}, {value: 'Isabelle Guillou'}, {value: 'Yves Bouvier-Berthelot'}, {value: 'David Guillaume'}, {value: 'Frédéric Andre'}, {value: 'Margaret Boulay'}, {value: 'Nicole Ledoux'}, {value: 'Thérèse Alexandre'}, {value: 'Claude de Auger'}, {value: 'Roger Masse'}, {value: 'Daniel Lelievre'}, {value: 'Andrée Verdier Le Paul'}, {value: 'Frédéric Laroche'}, {value: 'Emmanuel Michaud'}, {value: 'Alphonse Roy-Fernandez'}, {value: 'Simone Clement'}, {value: 'Colette Lemoine'}, {value: 'Virginie Ledoux'}, {value: 'Antoinette-Corinne Hamon'}, {value: 'Maryse Dias'}, {value: 'Marc Sauvage'}, {value: 'Paul Monnier'}, {value: 'Gilbert Wagner de la Martin'}, {value: 'Manon Nicolas'}, {value: 'Benoît Thibault-Humbert'}, {value: 'René Lefebvre'}, {value: 'Denis Lambert'}, {value: 'Isaac Philippe'}, {value: 'Robert du Nicolas'}, {value: 'Édouard Berthelot'}, {value: 'Théophile Martinez'}, {value: 'Aimé Leroux'}, {value: 'Olivier Normand'}, {value: 'David Gregoire'}, {value: 'Roger Mendes'}, {value: 'Capucine Bousquet'}, {value: 'Sophie Allard'}, {value: 'Christine Hamel'}, {value: 'Jeannine Benard du Loiseau'}, {value: 'Richard Gonzalez'}, {value: 'Célina Louis'}, {value: 'Nath-Dorothée Gilbert'}, {value: 'Édouard De Oliveira'}, {value: 'François Dupuis'}, {value: 'Margot Dubois-Brunel'}, {value: 'Philippine Le Lemoine'}, {value: 'Augustin Legros-Leclercq'}, {value: 'Marcelle Voisin-Baudry'}, {value: 'Françoise Cohen'}, {value: 'Georges Couturier'}, {value: 'Thomas-Jean Lefevre'}, {value: 'Paul Klein'}, {value: 'Arnaude Briand'}, {value: 'David Leconte'}, {value: 'Maryse Begue-Vallet'}, {value: 'Laurence Perret-Barthelemy'}, {value: 'Gabrielle du Blondel'}, {value: 'Alain Vasseur-Dijoux'}, {value: 'Philippe Pasquier'}, {value: 'Gabrielle de la Bouchet'}, {value: 'Jérôme Boulay'}, {value: 'William Lelievre'}, {value: 'Stéphane Jacob Le Guillot'}, {value: 'Antoine Delaunay'}, {value: 'Stéphane de Rodriguez'}, {value: 'Daniel Letellier'}, {value: 'Éléonore Jacques-Martineau'}, {value: 'Marianne Lebreton'}, {value: 'Dorothée Potier'}, {value: 'Jean Le Garcia'}, {value: 'Zoé de la Joubert'}, {value: 'Étienne Leroy'}, {value: 'Isaac Muller'}, {value: 'Emmanuelle Le Garcia'}, {value: 'William Legrand'}, {value: 'Maurice Marin'}, {value: 'Gilles Payet'}, {value: 'Lorraine Payet-Cousin'}, {value: 'Anastasie Perret-Chevalier'}, {value: 'David-Martin Dupont'}, {value: 'Michel Rey'}, {value: 'Célina Denis'}, {value: 'Benoît Bouchet'}, {value: 'Jeannine Foucher'}, {value: 'Jacques-Louis Dijoux'}, {value: 'Louise Fischer'}, {value: 'Marguerite-Philippine Berthelot'}, {value: 'Rémy Martins'}, {value: 'Patrick-Thierry Lejeune'}, {value: 'Gabrielle Bernier-Lemoine'}, {value: 'Jérôme Morin'}, {value: 'Olivie Labbe'}, {value: 'Hortense-Élisabeth Caron'}, {value: 'Inès Moreno'}, {value: 'Robert de Peltier'}, {value: 'Marianne Marie'}, {value: 'André Auger'}, {value: 'Nicole Le Ramos'}, {value: 'Thibaut Seguin'}, {value: 'Matthieu Duval'}, {value: 'Christine Lebrun'}, {value: 'Gilbert Roy de la Sanchez'}, {value: 'Stéphanie Bertin-Lefort'}, {value: 'Zacharie-Alexandre Fischer'}, {value: 'Gabriel Leblanc'}, {value: 'Margaux Navarro'}, {value: 'Jeannine Peltier-Navarro'}, {value: 'Édouard du Poulain'}, {value: 'Alexandrie-Manon Jourdan'}, {value: 'Luc Morel-Mallet'}, {value: 'Gérard Dumont'}, {value: 'Grégoire Leroy-Delaunay'}, {value: 'Stéphanie Bailly'}, {value: 'Sébastien Noel'}, {value: 'Marcelle-Aurélie Hardy'}, {value: 'Guy Joubert'}, {value: 'Anastasie Faivre de Pereira'}, {value: 'Maurice Gomez-Moulin'}, {value: 'Stéphanie Mendes'}, {value: 'Julie Aubry'}, {value: 'Dominique Sauvage'}, {value: 'Thierry Remy'}, {value: 'Tristan Legrand'}, {value: 'Julie Clement'}, {value: 'Lorraine Dias'}, {value: 'Thibault Riviere-Lesage'}, {value: 'Georges Durand'}, {value: 'Maggie Marty'}, {value: 'Olivier Torres'}, {value: 'Robert Jacquot-Colin'}, {value: 'Éléonore Girard'}, {value: 'Julie Muller'}, {value: 'Michelle Leclerc'}, {value: 'Nicolas Chauvin'}, {value: 'Denis Ollivier'}, {value: 'Alfred Monnier'}, {value: 'Dorothée Gilbert-Dumont'}, {value: 'Jeannine Rodrigues'}, {value: 'Émilie Traore'}, {value: 'Auguste Martin'}, {value: 'Alice Valette'}, {value: 'Geneviève Roussel'}, {value: 'Virginie Leger-Moulin'}, {value: 'Arthur Wagner-Dijoux'}, {value: 'David-Timothée Vidal'}, {value: 'Adélaïde Hoarau'}, {value: 'Margaud Guillou'}, {value: 'Sabine-Alexandria Pottier'}, {value: 'Michelle Giraud de Maillard'}, {value: 'Gilles Robin'}, {value: 'Roger Potier-Marechal'}, {value: 'Nath Moulin de la Petit'}, {value: 'Benjamin Le Lejeune'}, {value: 'Agathe Jean'}, {value: 'Stéphane Carre'}, {value: 'Claire Louis'}, {value: 'Jeannine Philippe'}, {value: 'Colette Joseph'}, {value: 'Charles Le Goff'}, {value: 'Timothée Duval'}, {value: 'Timothée Bouvier'}, {value: 'Jacques Samson'}, {value: 'Daniel Bouchet'}, {value: 'William Jacob'}, {value: 'Anaïs-Antoinette Menard'}, {value: 'Anaïs Goncalves'}, {value: 'Philippe Da Costa-Launay'}, {value: 'Léon Texier'}, {value: 'Denis Blondel'}, {value: 'Théodore Morvan'}, {value: 'Marc Sanchez'}, {value: 'William Gilbert'}, {value: 'Charles Rodrigues-Mathieu'}, {value: 'Guillaume Sauvage-Bodin'}, {value: 'Valérie Pelletier'}, {value: 'Maggie Girard'}, {value: 'Auguste Teixeira-Gimenez'}, {value: 'William de Bailly'}, {value: 'Vincent Clerc'}, {value: 'Gérard Lenoir'}, {value: 'Gabrielle Lacroix de Delahaye'}, {value: 'Zacharie-Alphonse Barbe'}, {value: 'Arnaude Francois'}, {value: 'Sylvie de Dias'}, {value: 'Thierry Valette'}, {value: 'Jérôme Laine'}]

    const onChange = (data) => {
        setValue(data);
    };

    const onSearch = (searchText) => {
        let filtered = users.filter(name => name.value.toLowerCase().startsWith(searchText.toLowerCase()));
        setOptions(filtered)
    };

    const deleteUser = (user) => {
      props.removeUser(user);
    };

    useEffect(()=> {}, [props.room])

    return (
       <div className="roomInfo">
           {Object.keys(props.room).length !== 0 ?
               <div>
                   <h1>SALLE : {props.room.name}</h1>

                   <div className='centered'>
                       <span>x Places disponibles</span>
                   </div>
                   <div className='fields'>
                       <span>Type:</span>
                       <span>{props.room.type}</span>
                   </div>
                   <div className='fields'>
                       <span>Capacité:</span>
                       <span>{props.room.capacity}</span>
                   </div>
                   <div className='fields'>
                       <span>Occupants:</span>
                       {
                          props.room.users.map(user => {
                              return <div className='user-array' key={user.value}>
                                  <Tooltip title="Supprimer">
                                      <Button danger shape="circle" icon={<DeleteOutlined />} size='small' onClick={() => deleteUser(user)} />
                                  </Tooltip>
                                  {user.value}
                              </div>
                          })
                       }
                   </div>
                   <div className='fields'>
                       <span>Autres informations:</span>
                       <span>{props.room.infos}</span>
                   </div>
                   <div className='fields'>
                       <AutoComplete
                           dropdownMatchSelectWidth={120}
                           style={{ width: 300 }}
                           options={options}
                           value={value}
                           onChange={onChange}
                           onSearch={onSearch}
                       >
                           <Input.Search size="medium" placeholder="input here" enterButton />
                       </AutoComplete>
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
