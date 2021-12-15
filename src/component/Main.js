import Floor from "./Floor";
import { useState} from "react";
import Building from "./Building";
import {Col, Row, Tabs} from "antd";
import '../css/main.scss';
import RoomInfo from "./RoomInfo";
import User from "./User";

import React, {useContext} from "react";
import {RoomsContext} from "../RoomsContext";
import {InfoCircleFilled} from "@ant-design/icons";

const { TabPane } = Tabs;

function Main({setRooms}) {
    const [floor, setFloor] = useState(0);
    const [room, setRoom] = useState({});

    const buildingModel = [
        {
            id: 'floor1', corridor: [
                {
                    id: 'f1-c1', rooms: [
                        {id: 'f1-c1-r1', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c1-r2', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c1-r4', isEmpty: false, blocType: 'bloc2'},
                        {id: 'f1-c1-r5', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c1-r6', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c1-r7', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c1-r8', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c1-r9', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c1-r10', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c1-r11', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c1-r12', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c1-r13', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c1-r14', isEmpty: false, blocType: 'bloc2'},
                        {id: 'f1-c1-r16', isEmpty: false, blocType: 'bloc1'}
                    ]
                },
                {
                    id: 'f1-c2', rooms: [
                        {id: 'f1-c2-r1', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c2-r2', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c2-r3', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c2-r4', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c2-r5', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c2-r6', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c2-r7', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c2-r8', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c2-r9', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c2-r10', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c2-r11', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c2-r12', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c2-r13', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c2-r14', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c2-r15', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c2-r16', isEmpty: false, blocType: 'bloc1'}
                    ]
                },
                {
                    id: 'f1-c3', rooms: [
                        {id: 'f1-c3-r1', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c3-r2', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c3-r3', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c3-r4', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c3-r5', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c3-r6', isEmpty: false, blocType: 'bloc2'},
                        {id: 'f1-c3-r8', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c3-r9', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c3-r10', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c3-r11', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c3-r12', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c3-r13', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c3-r14', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c3-r15', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c3-r16', isEmpty: false, blocType: 'bloc1'}
                    ]
                },
                {
                    id: 'f1-c4', rooms: [
                        {id: 'f1-c4-r1', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c4-r2', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c4-r3', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c4-r4', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c4-r5', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c4-r6', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c4-r7', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c4-r8', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c4-r9', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c4-r10', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c4-r11', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c4-r12', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c4-r13', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c4-r14', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c4-r15', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c4-r16', isEmpty: false, blocType: 'bloc1'}
                    ]
                },
                {
                    id: 'f1-c5', rooms: [
                        {id: 'f1-c5-r1', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c5-r2', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c5-r3', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c5-r4', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c5-r5', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c5-r6', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c5-r7', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c5-r8', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c5-r9', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c5-r10', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c5-r11', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c5-r12', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c5-r13', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c5-r14', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c5-r15', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c5-r16', isEmpty: false, blocType: 'bloc1'}
                    ]
                },
                {
                    id: 'f1-c6', rooms: [
                        {id: 'f1-c6-r1', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c6-r2', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c6-r3', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c6-r4', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c6-r5', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c6-r6', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c6-r7', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c6-r8', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c6-r9', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c6-r10', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c6-r11', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c6-r12', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f1-c6-r13', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f1-c6-r14', isEmpty: false, blocType: 'bloc2'},
                        {id: 'f1-c6-r16', isEmpty: false, blocType: 'bloc1'}
                    ]
                }
            ]
        },
        {
            id: 'floor2', corridor: [
                {
                    id: 'f2-c1', rooms: [
                        {id: 'f2-c1-r1', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c1-r2', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c1-r3', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c1-r4', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c1-r5', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c1-r6', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c1-r7', isEmpty: false, blocType: 'bloc4'},
                        {id: 'f2-c1-r11', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c1-r12', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c1-r13', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c1-r14', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c1-r15', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c1-r16', isEmpty: false, blocType: 'bloc1'}
                    ]
                },
                {
                    id: 'f2-c2', rooms: [
                        {id: 'f2-c2-r1', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c2-r2', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c2-r3', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c2-r4', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c2-r5', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c2-r6', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c2-r7', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c2-r8', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c2-r9', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c2-r10', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c2-r11', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c2-r12', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c2-r13', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c2-r14', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c2-r15', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c2-r16', isEmpty: false, blocType: 'bloc1'}
                    ]
                },
                {
                    id: 'f2-c3', rooms: [
                        {id: 'f2-c3-r1', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c3-r2', isEmpty: false, blocType: 'bloc3'},
                        {id: 'f2-c3-r5', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c3-r6', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c3-r7', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c3-r8', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c3-r9', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c3-r10', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c3-r11', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c3-r12', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c3-r13', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c3-r14', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c3-r15', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c3-r16', isEmpty: false, blocType: 'bloc1'}
                    ]
                },
                {
                    id: 'f2-c4', rooms: [
                        {id: 'f2-c4-r1', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c4-r2', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c4-r3', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c4-r4', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c4-r5', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c4-r6', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c4-r7', isEmpty: true, blocType: 'bloc'},
                        {id: 'f2-c4-r8', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c4-r9', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c4-r10', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c4-r11', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c4-r12', isEmpty: false, blocType: 'bloc3'},
                        {id: 'f2-c4-r15', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c4-r16', isEmpty: false, blocType: 'bloc1'}
                    ]
                },
                {
                    id: 'f2-c5', rooms: [
                        {id: 'f2-c5-r1', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c5-r2', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c5-r3', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c5-r4', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c5-r5', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c5-r6', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c5-r7', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c5-r8', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c5-r9', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c5-r10', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c5-r11', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c5-r12', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c5-r13', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c5-r14', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c5-r15', isEmpty: true, blocType: 'bloc1'},
                        {id: 'f2-c5-r16', isEmpty: false, blocType: 'bloc1'}
                    ]
                },
                {
                    id: 'f2-c6', rooms: [
                        {id: 'f2-c6-r1', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c6-r2', isEmpty: false, blocType: 'bloc2'},
                        {id: 'f2-c6-r4', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c6-r5', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c6-r6', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c6-r7', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c6-r8', isEmpty: false, blocType: 'bloc2'},
                        {id: 'f2-c6-r10', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c6-r11', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c6-r12', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c6-r13', isEmpty: false, blocType: 'bloc2'},
                        {id: 'f2-c6-r15', isEmpty: false, blocType: 'bloc1'},
                        {id: 'f2-c6-r16', isEmpty: false, blocType: 'bloc1'}
                    ]
                }
            ]
        },
    ];

    const rooms = useContext(RoomsContext);


    let users = [{value: 'Cédric Dumas'}, {value: 'Clémentine Biais'}, {value: 'Thomas Ledoux'}, {value: 'Oscar Gloaguen'}, {value: 'Martine Paul du Nicolas'}, {value: 'Éric de Richard'}, {value: 'Philippe Millet'}, {value: 'Denise de Langlois'}, {value: 'Lucie Grondin de Duval'}, {value: 'Margaud Boucher'}, {value: 'Gabriel Fabre-Morin'}, {value: 'Maryse Seguin-Richard'}, {value: 'Louis du Leger'}, {value: 'Alphonse Weiss-Legendre'}, {value: 'Christiane Simon'}, {value: 'Virginie Benoit'}, {value: 'Renée Camus'}, {value: 'Christelle Baudry de Carlier'}, {value: 'Roger Labbe'}, {value: 'Isabelle Guillou'}, {value: 'Yves Bouvier-Berthelot'}, {value: 'David Guillaume'}, {value: 'Frédéric Andre'}, {value: 'Margaret Boulay'}, {value: 'Nicole Ledoux'}, {value: 'Thérèse Alexandre'}, {value: 'Claude de Auger'}, {value: 'Roger Masse'}, {value: 'Daniel Lelievre'}, {value: 'Andrée Verdier Le Paul'}, {value: 'Frédéric Laroche'}, {value: 'Emmanuel Michaud'}, {value: 'Alphonse Roy-Fernandez'}, {value: 'Simone Clement'}, {value: 'Colette Lemoine'}, {value: 'Virginie Ledoux'}, {value: 'Antoinette-Corinne Hamon'}, {value: 'Maryse Dias'}, {value: 'Marc Sauvage'}, {value: 'Paul Monnier'}, {value: 'Gilbert Wagner de la Martin'}, {value: 'Manon Nicolas'}, {value: 'Benoît Thibault-Humbert'}, {value: 'René Lefebvre'}, {value: 'Denis Lambert'}, {value: 'Isaac Philippe'}, {value: 'Robert du Nicolas'}, {value: 'Édouard Berthelot'}, {value: 'Théophile Martinez'}, {value: 'Aimé Leroux'}, {value: 'Olivier Normand'}, {value: 'David Gregoire'}, {value: 'Roger Mendes'}, {value: 'Capucine Bousquet'}, {value: 'Sophie Allard'}, {value: 'Christine Hamel'}, {value: 'Jeannine Benard du Loiseau'}, {value: 'Richard Gonzalez'}, {value: 'Célina Louis'}, {value: 'Nath-Dorothée Gilbert'}, {value: 'Édouard De Oliveira'}, {value: 'François Dupuis'}, {value: 'Margot Dubois-Brunel'}, {value: 'Philippine Le Lemoine'}, {value: 'Augustin Legros-Leclercq'}, {value: 'Marcelle Voisin-Baudry'}, {value: 'Françoise Cohen'}, {value: 'Georges Couturier'}, {value: 'Thomas-Jean Lefevre'}, {value: 'Paul Klein'}, {value: 'Arnaude Briand'}, {value: 'David Leconte'}, {value: 'Maryse Begue-Vallet'}, {value: 'Laurence Perret-Barthelemy'}, {value: 'Gabrielle du Blondel'}, {value: 'Alain Vasseur-Dijoux'}, {value: 'Philippe Pasquier'}, {value: 'Gabrielle de la Bouchet'}, {value: 'Jérôme Boulay'}, {value: 'William Lelievre'}, {value: 'Stéphane Jacob Le Guillot'}, {value: 'Antoine Delaunay'}, {value: 'Stéphane de Rodriguez'}, {value: 'Daniel Letellier'}, {value: 'Éléonore Jacques-Martineau'}, {value: 'Marianne Lebreton'}, {value: 'Dorothée Potier'}, {value: 'Jean Le Garcia'}, {value: 'Zoé de la Joubert'}, {value: 'Étienne Leroy'}, {value: 'Isaac Muller'}, {value: 'Emmanuelle Le Garcia'}, {value: 'William Legrand'}, {value: 'Maurice Marin'}, {value: 'Gilles Payet'}, {value: 'Lorraine Payet-Cousin'}, {value: 'Anastasie Perret-Chevalier'}, {value: 'David-Martin Dupont'}, {value: 'Michel Rey'}, {value: 'Célina Denis'}, {value: 'Benoît Bouchet'}, {value: 'Jeannine Foucher'}, {value: 'Jacques-Louis Dijoux'}, {value: 'Louise Fischer'}, {value: 'Marguerite-Philippine Berthelot'}, {value: 'Rémy Martins'}, {value: 'Patrick-Thierry Lejeune'}, {value: 'Gabrielle Bernier-Lemoine'}, {value: 'Jérôme Morin'}, {value: 'Olivie Labbe'}, {value: 'Hortense-Élisabeth Caron'}, {value: 'Inès Moreno'}, {value: 'Robert de Peltier'}, {value: 'Marianne Marie'}, {value: 'André Auger'}, {value: 'Nicole Le Ramos'}, {value: 'Thibaut Seguin'}, {value: 'Matthieu Duval'}, {value: 'Christine Lebrun'}, {value: 'Gilbert Roy de la Sanchez'}, {value: 'Stéphanie Bertin-Lefort'}, {value: 'Zacharie-Alexandre Fischer'}, {value: 'Gabriel Leblanc'}, {value: 'Margaux Navarro'}, {value: 'Jeannine Peltier-Navarro'}, {value: 'Édouard du Poulain'}, {value: 'Alexandrie-Manon Jourdan'}, {value: 'Luc Morel-Mallet'}, {value: 'Gérard Dumont'}, {value: 'Grégoire Leroy-Delaunay'}, {value: 'Stéphanie Bailly'}, {value: 'Sébastien Noel'}, {value: 'Marcelle-Aurélie Hardy'}, {value: 'Guy Joubert'}, {value: 'Anastasie Faivre de Pereira'}, {value: 'Maurice Gomez-Moulin'}, {value: 'Stéphanie Mendes'}, {value: 'Julie Aubry'}, {value: 'Dominique Sauvage'}, {value: 'Thierry Remy'}, {value: 'Tristan Legrand'}, {value: 'Julie Clement'}, {value: 'Lorraine Dias'}, {value: 'Thibault Riviere-Lesage'}, {value: 'Georges Durand'}, {value: 'Maggie Marty'}, {value: 'Olivier Torres'}, {value: 'Robert Jacquot-Colin'}, {value: 'Éléonore Girard'}, {value: 'Julie Muller'}, {value: 'Michelle Leclerc'}, {value: 'Nicolas Chauvin'}, {value: 'Denis Ollivier'}, {value: 'Alfred Monnier'}, {value: 'Dorothée Gilbert-Dumont'}, {value: 'Jeannine Rodrigues'}, {value: 'Émilie Traore'}, {value: 'Auguste Martin'}, {value: 'Alice Valette'}, {value: 'Geneviève Roussel'}, {value: 'Virginie Leger-Moulin'}, {value: 'Arthur Wagner-Dijoux'}, {value: 'David-Timothée Vidal'}, {value: 'Adélaïde Hoarau'}, {value: 'Margaud Guillou'}, {value: 'Sabine-Alexandria Pottier'}, {value: 'Michelle Giraud de Maillard'}, {value: 'Gilles Robin'}, {value: 'Roger Potier-Marechal'}, {value: 'Nath Moulin de la Petit'}, {value: 'Benjamin Le Lejeune'}, {value: 'Agathe Jean'}, {value: 'Stéphane Carre'}, {value: 'Claire Louis'}, {value: 'Jeannine Philippe'}, {value: 'Colette Joseph'}, {value: 'Charles Le Goff'}, {value: 'Timothée Duval'}, {value: 'Timothée Bouvier'}, {value: 'Jacques Samson'}, {value: 'Daniel Bouchet'}, {value: 'William Jacob'}, {value: 'Anaïs-Antoinette Menard'}, {value: 'Anaïs Goncalves'}, {value: 'Philippe Da Costa-Launay'}, {value: 'Léon Texier'}, {value: 'Denis Blondel'}, {value: 'Théodore Morvan'}, {value: 'Marc Sanchez'}, {value: 'William Gilbert'}, {value: 'Charles Rodrigues-Mathieu'}, {value: 'Guillaume Sauvage-Bodin'}, {value: 'Valérie Pelletier'}, {value: 'Maggie Girard'}, {value: 'Auguste Teixeira-Gimenez'}, {value: 'William de Bailly'}, {value: 'Vincent Clerc'}, {value: 'Gérard Lenoir'}, {value: 'Gabrielle Lacroix de Delahaye'}, {value: 'Zacharie-Alphonse Barbe'}, {value: 'Arnaude Francois'}, {value: 'Sylvie de Dias'}, {value: 'Thierry Valette'}, {value: 'Jérôme Laine'}]

   function removeUser(user) {
       console.log('REMOVE')
       const roomsTemp = JSON.parse(JSON.stringify(rooms));
       const index2 = roomsTemp.findIndex(u => u.id === room.id);
       const tempRoom = roomsTemp[index2]
       const index = tempRoom.users.findIndex(u => u.value === user.value);

       if (index > -1) {
           tempRoom.users.splice(index, 1);
       }

       setRooms(roomsTemp);
       setRoom(tempRoom);
    }

    function addUser(user) {
        console.log('ADD')
        const roomsTemp = JSON.parse(JSON.stringify(rooms));
        const index2 = roomsTemp.findIndex(u => u.id === room.id);
        const tempRoom = roomsTemp[index2]
        tempRoom.users.push({value: user});

        setRooms(roomsTemp);
        setRoom(tempRoom);
    }

    const isAvailable = (user) => {
        return !rooms.filter(r => r.users.filter (u => u.value === user.value ).length > 0).length > 0;
    }

    return (
        <div className="main">
            <Row>
                <Col span={19} className="left">
                    <Floor floor={floor} setFloor={setFloor} setRoom={setRoom}/>
                    <Building floor={floor} building={buildingModel} setRoom={setRoom} room={room} setRooms={setRooms}/>
                </Col>
                <Col span={5} className="right">
                    <Tabs defaultActiveKey="1" style={{paddingLeft: 15}}>
                        <TabPane tab="Détail salle" key="1">
                            <RoomInfo room={room} building={buildingModel} removeUser={removeUser} addUser={addUser} rooms={rooms} users={users}/>
                        </TabPane>
                        <TabPane tab="Déplacer occupants" key="2" className="user-pan">
                            <div className='user-legend'>
                                   <InfoCircleFilled style={{marginRight: 3}}/>Vous pouvez déplacer les personnes sur les bureaux disponibles
                            </div>
                            {users.map((us) => isAvailable(us) ? <div key={'LIST-USER-' + us.value}>
                                <User user={us}/>
                            </div> : '')}
                        </TabPane>
                    </Tabs>

                </Col>
            </Row>
        </div>
    );
}

export default Main;
