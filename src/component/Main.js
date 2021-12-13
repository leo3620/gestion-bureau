import Floor from "./Floor";
import {useState} from "react";
import Building from "./Building";
import {Col, Row} from "antd";
import '../css/main.scss';
import RoomInfo from "./RoomInfo";

function Main() {
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

    const roomsModel = [
        {id: 'f1-c1-r1', users: [{value: 'Jean EUDE'}, {value: 'Jean BERNARD'}], type: [], name: 'A-101', infos: [], capacity: 1},
        {id: 'f1-c1-r2', users: [], type: [], name: 'A-102', infos: [], capacity: 1},
        {id: 'f1-c1-r3', users: [], type: [], name: 'A-103', infos: [], capacity: 1},
        {id: 'f1-c1-r4', users: [], type: [], name: 'A-104', infos: [], capacity: 2},
        {id: 'f1-c1-r5', users: [], type: [], name: 'A-105', infos: [], capacity: 1},
        {id: 'f1-c1-r6', users: [], type: [], name: 'A-106', infos: [], capacity: 1},
        {id: 'f1-c1-r7', users: [], type: [], name: 'A-107', infos: [], capacity: 1},
        {id: 'f1-c1-r8', users: [], type: [], name: 'A-108', infos: [], capacity: 1},
        {id: 'f1-c1-r9', users: [], type: [], name: 'A-109', infos: [], capacity: 1},
        {id: 'f1-c1-r10', users: [], type: [], name: 'A-110', infos: [], capacity: 1},
        {id: 'f1-c1-r11', users: [], type: [], name: 'A-111', infos: [], capacity: 1},
        {id: 'f1-c1-r12', users: [], type: [], name: 'A-112', infos: [], capacity: 1},
        {id: 'f1-c1-r13', users: [], type: [], name: 'A-113', infos: [], capacity: 1},
        {id: 'f1-c1-r14', users: [], type: [], name: 'A-114', infos: [], capacity: 2},
        {id: 'f1-c1-r15', users: [], type: [], name: 'A-115', infos: [], capacity: 1},
        {id: 'f1-c1-r16', users: [], type: [], name: 'A-116', infos: [], capacity: 1},
        {id: 'f1-c2-r1', users: [], type: [], name: 'A-117', infos: [], capacity: 1},
        {id: 'f1-c2-r2', users: [], type: [], name: 'A-118', infos: [], capacity: 1},
        {id: 'f1-c2-r3', users: [], type: [], name: 'A-119', infos: [], capacity: 1},
        {id: 'f1-c2-r4', users: [], type: [], name: 'A-120', infos: [], capacity: 1},
        {id: 'f1-c2-r5', users: [], type: [], name: 'A-121', infos: [], capacity: 1},
        {id: 'f1-c2-r6', users: [], type: [], name: 'A-122', infos: [], capacity: 1},
        {id: 'f1-c2-r7', users: [], type: [], name: 'A-123', infos: [], capacity: 1},
        {id: 'f1-c2-r8', users: [], type: [], name: 'A-124', infos: [], capacity: 1},
        {id: 'f1-c2-r9', users: [], type: [], name: 'A-125', infos: [], capacity: 1},
        {id: 'f1-c2-r10', users: [], type: [], name: 'A-126', infos: [], capacity: 1},
        {id: 'f1-c2-r11', users: [], type: [], name: 'A-127', infos: [], capacity: 1},
        {id: 'f1-c2-r12', users: [], type: [], name: 'A-128', infos: [], capacity: 1},
        {id: 'f1-c2-r13', users: [], type: [], name: 'A-129', infos: [], capacity: 1},
        {id: 'f1-c2-r14', users: [], type: [], name: 'A-130', infos: [], capacity: 1},
        {id: 'f1-c2-r15', users: [], type: [], name: 'A-131', infos: [], capacity: 1},
        {id: 'f1-c2-r16', users: [], type: [], name: 'A-132', infos: [], capacity: 1},
        {id: 'f1-c3-r1', users: [], type: [], name: 'A-133', infos: [], capacity: 1},
        {id: 'f1-c3-r2', users: [], type: [], name: 'A-134', infos: [], capacity: 1},
        {id: 'f1-c3-r3', users: [], type: [], name: 'A-135', infos: [], capacity: 1},
        {id: 'f1-c3-r4', users: [], type: [], name: 'A-136', infos: [], capacity: 1},
        {id: 'f1-c3-r5', users: [], type: [], name: 'A-137', infos: [], capacity: 1},
        {id: 'f1-c3-r6', users: [], type: [], name: 'A-138', infos: [], capacity: 2},
        {id: 'f1-c3-r7', users: [], type: [], name: 'A-139', infos: [], capacity: 1},
        {id: 'f1-c3-r8', users: [], type: [], name: 'A-140', infos: [], capacity: 1},
        {id: 'f1-c3-r9', users: [], type: [], name: 'A-141', infos: [], capacity: 1},
        {id: 'f1-c3-r10', users: [], type: [], name: 'A-142', infos: [], capacity: 1},
        {id: 'f1-c3-r11', users: [], type: [], name: 'A-143', infos: [], capacity: 1},
        {id: 'f1-c3-r12', users: [], type: [], name: 'A-144', infos: [], capacity: 1},
        {id: 'f1-c3-r13', users: [], type: [], name: 'A-145', infos: [], capacity: 1},
        {id: 'f1-c3-r14', users: [], type: [], name: 'A-146', infos: [], capacity: 1},
        {id: 'f1-c3-r15', users: [], type: [], name: 'A-147', infos: [], capacity: 1},
        {id: 'f1-c3-r16', users: [], type: [], name: 'A-148', infos: [], capacity: 1},
        {id: 'f1-c4-r1', users: [], type: [], name: 'A-149', infos: [], capacity: 1},
        {id: 'f1-c4-r2', users: [], type: [], name: 'A-150', infos: [], capacity: 1},
        {id: 'f1-c4-r3', users: [], type: [], name: 'A-151', infos: [], capacity: 1},
        {id: 'f1-c4-r4', users: [], type: [], name: 'A-152', infos: [], capacity: 1},
        {id: 'f1-c4-r5', users: [], type: [], name: 'A-153', infos: [], capacity: 1},
        {id: 'f1-c4-r6', users: [], type: [], name: 'A-154', infos: [], capacity: 1},
        {id: 'f1-c4-r7', users: [], type: [], name: 'A-155', infos: [], capacity: 1},
        {id: 'f1-c4-r8', users: [], type: [], name: 'A-156', infos: [], capacity: 1},
        {id: 'f1-c4-r9', users: [], type: [], name: 'A-157', infos: [], capacity: 1},
        {id: 'f1-c4-r10', users: [], type: [], name: 'A-158', infos: [], capacity: 1},
        {id: 'f1-c4-r11', users: [], type: [], name: 'A-159', infos: [], capacity: 1},
        {id: 'f1-c4-r12', users: [], type: [], name: 'A-160', infos: [], capacity: 1},
        {id: 'f1-c4-r13', users: [], type: [], name: 'A-161', infos: [], capacity: 1},
        {id: 'f1-c4-r14', users: [], type: [], name: 'A-162', infos: [], capacity: 1},
        {id: 'f1-c4-r15', users: [], type: [], name: 'A-163', infos: [], capacity: 1},
        {id: 'f1-c4-r16', users: [], type: [], name: 'A-164', infos: [], capacity: 1},
        {id: 'f1-c5-r1', users: [], type: [], name: 'A-165', infos: [], capacity: 1},
        {id: 'f1-c5-r2', users: [], type: [], name: 'A-166', infos: [], capacity: 1},
        {id: 'f1-c5-r3', users: [], type: [], name: 'A-167', infos: [], capacity: 1},
        {id: 'f1-c5-r4', users: [], type: [], name: 'A-168', infos: [], capacity: 1},
        {id: 'f1-c5-r5', users: [], type: [], name: 'A-169', infos: [], capacity: 1},
        {id: 'f1-c5-r6', users: [], type: [], name: 'A-170', infos: [], capacity: 1},
        {id: 'f1-c5-r7', users: [], type: [], name: 'A-171', infos: [], capacity: 1},
        {id: 'f1-c5-r8', users: [], type: [], name: 'A-172', infos: [], capacity: 1},
        {id: 'f1-c5-r9', users: [], type: [], name: 'A-173', infos: [], capacity: 1},
        {id: 'f1-c5-r10', users: [], type: [], name: 'A-174', infos: [], capacity: 1},
        {id: 'f1-c5-r11', users: [], type: [], name: 'A-175', infos: [], capacity: 1},
        {id: 'f1-c5-r12', users: [], type: [], name: 'A-176', infos: [], capacity: 1},
        {id: 'f1-c5-r13', users: [], type: [], name: 'A-177', infos: [], capacity: 1},
        {id: 'f1-c5-r14', users: [], type: [], name: 'A-178', infos: [], capacity: 1},
        {id: 'f1-c5-r15', users: [], type: [], name: 'A-179', infos: [], capacity: 1},
        {id: 'f1-c5-r16', users: [], type: [], name: 'A-180', infos: [], capacity: 1},
        {id: 'f1-c6-r1', users: [], type: [], name: 'A-181', infos: [], capacity: 1},
        {id: 'f1-c6-r2', users: [], type: [], name: 'A-182', infos: [], capacity: 1},
        {id: 'f1-c6-r3', users: [], type: [], name: 'A-183', infos: [], capacity: 1},
        {id: 'f1-c6-r4', users: [], type: [], name: 'A-184', infos: [], capacity: 1},
        {id: 'f1-c6-r5', users: [], type: [], name: 'A-185', infos: [], capacity: 1},
        {id: 'f1-c6-r6', users: [], type: [], name: 'A-186', infos: [], capacity: 1},
        {id: 'f1-c6-r7', users: [], type: [], name: 'A-187', infos: [], capacity: 1},
        {id: 'f1-c6-r8', users: [], type: [], name: 'A-188', infos: [], capacity: 1},
        {id: 'f1-c6-r9', users: [], type: [], name: 'A-189', infos: [], capacity: 1},
        {id: 'f1-c6-r10', users: [], type: [], name: 'A-190', infos: [], capacity: 1},
        {id: 'f1-c6-r11', users: [], type: [], name: 'A-191', infos: [], capacity: 1},
        {id: 'f1-c6-r12', users: [], type: [], name: 'A-192', infos: [], capacity: 1},
        {id: 'f1-c6-r13', users: [], type: [], name: 'A-193', infos: [], capacity: 1},
        {id: 'f1-c6-r14', users: [], type: [], name: 'A-194', infos: [], capacity: 2},
        {id: 'f1-c6-r15', users: [], type: [], name: 'A-195', infos: [], capacity: 1},
        {id: 'f1-c6-r16', users: [], type: [], name: 'A-196', infos: [], capacity: 1},
        {id: 'f2-c1-r1', users: [], type: [], name: 'A-201', infos: [], capacity: 1},
        {id: 'f2-c1-r2', users: [], type: [], name: 'A-202', infos: [], capacity: 1},
        {id: 'f2-c1-r3', users: [], type: [], name: 'A-203', infos: [], capacity: 1},
        {id: 'f2-c1-r4', users: [], type: [], name: 'A-204', infos: [], capacity: 1},
        {id: 'f2-c1-r5', users: [], type: [], name: 'A-205', infos: [], capacity: 1},
        {id: 'f2-c1-r6', users: [], type: [], name: 'A-206', infos: [], capacity: 1},
        {id: 'f2-c1-r7', users: [], type: [], name: 'A-207', infos: [], capacity: 4},
        {id: 'f2-c1-r8', users: [], type: [], name: 'A-208', infos: [], capacity: 1},
        {id: 'f2-c1-r9', users: [], type: [], name: 'A-209', infos: [], capacity: 1},
        {id: 'f2-c1-r10', users: [], type: [], name: 'A-210', infos: [], capacity: 1},
        {id: 'f2-c1-r11', users: [], type: [], name: 'A-211', infos: [], capacity: 1},
        {id: 'f2-c1-r12', users: [], type: [], name: 'A-212', infos: [], capacity: 1},
        {id: 'f2-c1-r13', users: [], type: [], name: 'A-213', infos: [], capacity: 1},
        {id: 'f2-c1-r14', users: [], type: [], name: 'A-214', infos: [], capacity: 1},
        {id: 'f2-c1-r15', users: [], type: [], name: 'A-215', infos: [], capacity: 1},
        {id: 'f2-c1-r16', users: [], type: [], name: 'A-216', infos: [], capacity: 1},
        {id: 'f2-c2-r1', users: [], type: [], name: 'A-217', infos: [], capacity: 1},
        {id: 'f2-c2-r16', users: [], type: [], name: 'A-218', infos: [], capacity: 1},
        {id: 'f2-c3-r1', users: [], type: [], name: 'A-219', infos: [], capacity: 1},
        {id: 'f2-c3-r2', users: [], type: [], name: 'A-220', infos: [], capacity: 3},
        {id: 'f2-c3-r5', users: [], type: [], name: 'A-221', infos: [], capacity: 1},
        {id: 'f2-c3-r6', users: [], type: [], name: 'A-222', infos: [], capacity: 1},
        {id: 'f2-c3-r8', users: [], type: [], name: 'A-223', infos: [], capacity: 1},
        {id: 'f2-c3-r9', users: [], type: [], name: 'A-224', infos: [], capacity: 1},
        {id: 'f2-c3-r11', users: [], type: [], name: 'A-225', infos: [], capacity: 1},
        {id: 'f2-c3-r12', users: [], type: [], name: 'A-226', infos: [], capacity: 1},
        {id: 'f2-c3-r13', users: [], type: [], name: 'A-227', infos: [], capacity: 1},
        {id: 'f2-c3-r14', users: [], type: [], name: 'A-228', infos: [], capacity: 1},
        {id: 'f2-c3-r15', users: [], type: [], name: 'A-229', infos: [], capacity: 1},
        {id: 'f2-c3-r16', users: [], type: [], name: 'A-230', infos: [], capacity: 1},
        {id: 'f2-c4-r1', users: [], type: [], name: 'A-231', infos: [], capacity: 1},
        {id: 'f2-c4-r2', users: [], type: [], name: 'A-232', infos: [], capacity: 1},
        {id: 'f2-c4-r3', users: [], type: [], name: 'A-233', infos: [], capacity: 1},
        {id: 'f2-c4-r4', users: [], type: [], name: 'A-234', infos: [], capacity: 1},
        {id: 'f2-c4-r5', users: [], type: [], name: 'A-235', infos: [], capacity: 1},
        {id: 'f2-c4-r6', users: [], type: [], name: 'A-236', infos: [], capacity: 1},
        {id: 'f2-c4-r11', users: [], type: [], name: 'A-237', infos: [], capacity: 1},
        {id: 'f2-c4-r12', users: [], type: [], name: 'A-238', infos: [], capacity: 3},
        {id: 'f2-c4-r13', users: [], type: [], name: 'A-239', infos: [], capacity: 1},
        {id: 'f2-c4-r14', users: [], type: [], name: 'A-240', infos: [], capacity: 1},
        {id: 'f2-c4-r15', users: [], type: [], name: 'A-241', infos: [], capacity: 1},
        {id: 'f2-c4-r16', users: [], type: [], name: 'A-242', infos: [], capacity: 1},
        {id: 'f2-c5-r1', users: [], type: [], name: 'A-243', infos: [], capacity: 1},
        {id: 'f2-c5-r16', users: [], type: [], name: 'A-244', infos: [], capacity: 1},
        {id: 'f2-c6-r1', users: [], type: [], name: 'A-245', infos: [], capacity: 1},
        {id: 'f2-c6-r2', users: [], type: [], name: 'A-246', infos: [], capacity: 2},
        {id: 'f2-c6-r3', users: [], type: [], name: 'A-247', infos: [], capacity: 1},
        {id: 'f2-c6-r4', users: [], type: [], name: 'A-248', infos: [], capacity: 1},
        {id: 'f2-c6-r5', users: [], type: [], name: 'A-249', infos: [], capacity: 1},
        {id: 'f2-c6-r6', users: [], type: [], name: 'A-250', infos: [], capacity: 1},
        {id: 'f2-c6-r7', users: [], type: [], name: 'A-251', infos: [], capacity: 1},
        {id: 'f2-c6-r8', users: [], type: [], name: 'A-252', infos: [], capacity: 2},
        {id: 'f2-c6-r9', users: [], type: [], name: 'A-253', infos: [], capacity: 1},
        {id: 'f2-c6-r10', users: [], type: [], name: 'A-254', infos: [], capacity: 1},
        {id: 'f2-c6-r11', users: [], type: [], name: 'A-255', infos: [], capacity: 1},
        {id: 'f2-c6-r12', users: [], type: [], name: 'A-256', infos: [], capacity: 1},
        {id: 'f2-c6-r13', users: [], type: [], name: 'A-257', infos: [], capacity: 2},
        {id: 'f2-c6-r14', users: [], type: [], name: 'A-258', infos: [], capacity: 1},
        {id: 'f2-c6-r15', users: [], type: [], name: 'A-259', infos: [], capacity: 1},
        {id: 'f2-c6-r16', users: [], type: [], name: 'A-260', infos: [], capacity: 1},
    ];

    const [rooms, setRooms] = useState(roomsModel);

   function removeUser(user) {

       const index = room.users.findIndex(u => u.value === user.value);

       if (index > -1) {
           room.users.splice(index, 1);
       }

        setRoom(JSON.parse(JSON.stringify(room)));
    }

    return (
        <div className="main">
            <Row>
                <Col span={18} className="left">
                    <Floor floor={floor} setFloor={setFloor} setRoom={setRoom}/>
                    <Building floor={floor} building={buildingModel} rooms={rooms} setRoom={setRoom} room={room}/>
                </Col>
                <Col span={6} className="right">
                        <RoomInfo room={room} building={buildingModel} removeUser={removeUser}/>
                </Col>
            </Row>


        </div>
    );
}

export default Main;
