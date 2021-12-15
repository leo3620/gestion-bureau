import {Layout, Menu} from 'antd';

import {useState} from "react";

import './App.css';
import "antd/dist/antd.css";

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {DesktopOutlined, UserOutlined} from "@ant-design/icons";
import Main from "./component/Main";
import {RoomsContext} from "./RoomsContext";
import People from "./component/People";

const { Header, Content, Footer, Sider } = Layout;
function App() {

    const [collapsed, setCollapsed] = useState(true);


    let onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

    const roomsModel = [
        {id: 'f1-c1-r1', users: [{value: 'Jean BERNARD'}], type: 'Standard', name: 'A-101', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c1-r2', users: [{value: 'Cédric Dumas'}], type: 'Standard', name: 'A-102', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c1-r3', users: [], type: 'Standard', name: 'A-103', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c1-r4', users: [], type: 'Standard', name: 'A-104', infos: 'Un exemple d\'information', capacity: 2},
        {id: 'f1-c1-r5', users: [], type: 'Standard', name: 'A-105', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c1-r6', users: [], type: 'Standard', name: 'A-106', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c1-r7', users: [], type: 'Standard', name: 'A-107', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c1-r8', users: [], type: 'Standard', name: 'A-108', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c1-r9', users: [], type: 'Laboratoire', name: 'A-109', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c1-r10', users: [], type: 'Laboratoire', name: 'A-110', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c1-r11', users: [], type: 'Standard', name: 'A-111', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c1-r12', users: [], type: 'Standard', name: 'A-112', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c1-r13', users: [], type: 'Standard', name: 'A-113', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c1-r14', users: [], type: 'Standard', name: 'A-114', infos: 'Un exemple d\'information', capacity: 2},
        {id: 'f1-c1-r15', users: [], type: 'Standard', name: 'A-115', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c1-r16', users: [], type: 'Standard', name: 'A-116', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c2-r1', users: [], type: 'Standard', name: 'A-117', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c2-r2', users: [], type: 'Standard', name: 'A-118', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c2-r3', users: [], type: 'Standard', name: 'A-119', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c2-r4', users: [], type: 'Standard', name: 'A-120', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c2-r5', users: [], type: 'Standard', name: 'A-121', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c2-r6', users: [], type: 'Standard', name: 'A-122', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c2-r7', users: [], type: 'Standard', name: 'A-123', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c2-r8', users: [], type: 'Standard', name: 'A-124', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c2-r9', users: [], type: 'Standard', name: 'A-125', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c2-r10', users: [], type: 'Standard', name: 'A-126', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c2-r11', users: [], type: 'Standard', name: 'A-127', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c2-r12', users: [], type: 'Standard', name: 'A-128', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c2-r13', users: [], type: 'Standard', name: 'A-129', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c2-r14', users: [], type: 'Standard', name: 'A-130', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c2-r15', users: [], type: 'Standard', name: 'A-131', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c2-r16', users: [], type: 'Standard', name: 'A-132', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c3-r1', users: [], type: 'Standard', name: 'A-133', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c3-r2', users: [], type: 'Standard', name: 'A-134', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c3-r3', users: [], type: 'Standard', name: 'A-135', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c3-r4', users: [], type: 'Standard', name: 'A-136', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c3-r5', users: [], type: 'Laboratoire', name: 'A-137', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c3-r6', users: [], type: 'Standard', name: 'A-138', infos: 'Un exemple d\'information', capacity: 2},
        {id: 'f1-c3-r7', users: [], type: 'Standard', name: 'A-139', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c3-r8', users: [], type: 'Standard', name: 'A-140', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c3-r9', users: [], type: 'Standard', name: 'A-141', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c3-r10', users: [], type: 'Standard', name: 'A-142', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c3-r11', users: [], type: 'Standard', name: 'A-143', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c3-r12', users: [], type: 'Standard', name: 'A-144', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c3-r13', users: [], type: 'Standard', name: 'A-145', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c3-r14', users: [], type: 'Standard', name: 'A-146', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c3-r15', users: [], type: 'Standard', name: 'A-147', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c3-r16', users: [], type: 'Standard', name: 'A-148', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c4-r1', users: [], type: 'Standard', name: 'A-149', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c4-r2', users: [], type: 'Standard', name: 'A-150', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c4-r3', users: [], type: 'Standard', name: 'A-151', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c4-r4', users: [], type: 'Standard', name: 'A-152', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c4-r5', users: [], type: 'Standard', name: 'A-153', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c4-r6', users: [], type: 'Standard', name: 'A-154', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c4-r7', users: [], type: 'Standard', name: 'A-155', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c4-r8', users: [], type: 'Standard', name: 'A-156', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c4-r9', users: [], type: 'Standard', name: 'A-157', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c4-r10', users: [], type: 'Standard', name: 'A-158', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c4-r11', users: [], type: 'Standard', name: 'A-159', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c4-r12', users: [], type: 'Standard', name: 'A-160', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c4-r13', users: [], type: 'Standard', name: 'A-161', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c4-r14', users: [], type: 'Standard', name: 'A-162', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c4-r15', users: [], type: 'Standard', name: 'A-163', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c4-r16', users: [], type: 'Standard', name: 'A-164', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c5-r1', users: [], type: 'Standard', name: 'A-165', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c5-r2', users: [], type: 'Standard', name: 'A-166', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c5-r3', users: [], type: 'Standard', name: 'A-167', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c5-r4', users: [], type: 'Standard', name: 'A-168', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c5-r5', users: [], type: 'Standard', name: 'A-169', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c5-r6', users: [], type: 'Standard', name: 'A-170', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c5-r7', users: [], type: 'Standard', name: 'A-171', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c5-r8', users: [], type: 'Standard', name: 'A-172', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c5-r9', users: [], type: 'Standard', name: 'A-173', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c5-r10', users: [], type: 'Standard', name: 'A-174', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c5-r11', users: [], type: 'Standard', name: 'A-175', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c5-r12', users: [], type: 'Standard', name: 'A-176', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c5-r13', users: [], type: 'Standard', name: 'A-177', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c5-r14', users: [], type: 'Standard', name: 'A-178', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c5-r15', users: [], type: 'Standard', name: 'A-179', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c5-r16', users: [], type: 'Standard', name: 'A-180', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c6-r1', users: [], type: 'Standard', name: 'A-181', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c6-r2', users: [], type: 'Standard', name: 'A-182', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c6-r3', users: [], type: 'Standard', name: 'A-183', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c6-r4', users: [], type: 'Standard', name: 'A-184', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c6-r5', users: [], type: 'Standard', name: 'A-185', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c6-r6', users: [], type: 'Standard', name: 'A-186', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c6-r7', users: [], type: 'Standard', name: 'A-187', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c6-r8', users: [], type: 'Standard', name: 'A-188', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c6-r9', users: [], type: 'Standard', name: 'A-189', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c6-r10', users: [], type: 'Standard', name: 'A-190', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c6-r11', users: [], type: 'Standard', name: 'A-191', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c6-r12', users: [], type: 'Standard', name: 'A-192', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c6-r13', users: [], type: 'Standard', name: 'A-193', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c6-r14', users: [], type: 'Laboratoire', name: 'A-194', infos: 'Un exemple d\'information', capacity: 2},
        {id: 'f1-c6-r15', users: [], type: 'Standard', name: 'A-195', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f1-c6-r16', users: [], type: 'Standard', name: 'A-196', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c1-r1', users: [], type: 'Standard', name: 'A-201', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c1-r2', users: [], type: 'Standard', name: 'A-202', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c1-r3', users: [], type: 'Standard', name: 'A-203', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c1-r4', users: [], type: 'Standard', name: 'A-204', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c1-r5', users: [], type: 'Standard', name: 'A-205', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c1-r6', users: [], type: 'Standard', name: 'A-206', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c1-r7', users: [], type: 'Standard', name: 'A-207', infos: 'Un exemple d\'information', capacity: 4},
        {id: 'f2-c1-r8', users: [], type: 'Standard', name: 'A-208', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c1-r9', users: [], type: 'Standard', name: 'A-209', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c1-r10', users: [], type: 'Standard', name: 'A-210', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c1-r11', users: [], type: 'Standard', name: 'A-211', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c1-r12', users: [], type: 'Standard', name: 'A-212', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c1-r13', users: [], type: 'Standard', name: 'A-213', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c1-r14', users: [], type: 'Standard', name: 'A-214', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c1-r15', users: [], type: 'Standard', name: 'A-215', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c1-r16', users: [], type: 'Standard', name: 'A-216', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c2-r1', users: [], type: 'Standard', name: 'A-217', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c2-r16', users: [], type: 'Standard', name: 'A-218', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c3-r1', users: [], type: 'Standard', name: 'A-219', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c3-r2', users: [], type: 'Standard', name: 'A-220', infos: 'Un exemple d\'information', capacity: 3},
        {id: 'f2-c3-r5', users: [], type: 'Standard', name: 'A-221', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c3-r6', users: [], type: 'Standard', name: 'A-222', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c3-r8', users: [], type: 'Standard', name: 'A-223', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c3-r9', users: [], type: 'Standard', name: 'A-224', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c3-r11', users: [], type: 'Standard', name: 'A-225', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c3-r12', users: [], type: 'Standard', name: 'A-226', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c3-r13', users: [], type: 'Standard', name: 'A-227', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c3-r14', users: [], type: 'Standard', name: 'A-228', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c3-r15', users: [], type: 'Standard', name: 'A-229', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c3-r16', users: [], type: 'Standard', name: 'A-230', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c4-r1', users: [], type: 'Standard', name: 'A-231', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c4-r2', users: [], type: 'Standard', name: 'A-232', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c4-r3', users: [], type: 'Standard', name: 'A-233', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c4-r4', users: [], type: 'Standard', name: 'A-234', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c4-r5', users: [], type: 'Standard', name: 'A-235', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c4-r6', users: [], type: 'Standard', name: 'A-236', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c4-r11', users: [], type: 'Standard', name: 'A-237', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c4-r12', users: [], type: 'Standard', name: 'A-238', infos: 'Un exemple d\'information', capacity: 3},
        {id: 'f2-c4-r13', users: [], type: 'Standard', name: 'A-239', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c4-r14', users: [], type: 'Standard', name: 'A-240', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c4-r15', users: [], type: 'Standard', name: 'A-241', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c4-r16', users: [], type: 'Standard', name: 'A-242', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c5-r1', users: [], type: 'Standard', name: 'A-243', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c5-r16', users: [], type: 'Standard', name: 'A-244', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c6-r1', users: [], type: 'Standard', name: 'A-245', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c6-r2', users: [], type: 'Standard', name: 'A-246', infos: 'Un exemple d\'information', capacity: 2},
        {id: 'f2-c6-r3', users: [], type: 'Standard', name: 'A-247', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c6-r4', users: [], type: 'Standard', name: 'A-248', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c6-r5', users: [], type: 'Standard', name: 'A-249', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c6-r6', users: [], type: 'Standard', name: 'A-250', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c6-r7', users: [], type: 'Standard', name: 'A-251', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c6-r8', users: [], type: 'Standard', name: 'A-252', infos: 'Un exemple d\'information', capacity: 2},
        {id: 'f2-c6-r9', users: [], type: 'Standard', name: 'A-253', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c6-r10', users: [], type: 'Standard', name: 'A-254', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c6-r11', users: [], type: 'Standard', name: 'A-255', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c6-r12', users: [], type: 'Standard', name: 'A-256', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c6-r13', users: [], type: 'Standard', name: 'A-257', infos: 'Un exemple d\'information', capacity: 2},
        {id: 'f2-c6-r14', users: [], type: 'Standard', name: 'A-258', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c6-r15', users: [], type: 'Standard', name: 'A-259', infos: 'Un exemple d\'information', capacity: 1},
        {id: 'f2-c6-r16', users: [], type: 'Standard', name: 'A-260', infos: 'Un exemple d\'information', capacity: 1},
    ];
    const [rooms, setRooms] = useState(JSON.parse(JSON.stringify(roomsModel)));

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Layout className="site-layout">
                <Router>
                    <RoomsContext.Provider value={rooms}>
                    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<DesktopOutlined />}>
                                <Link to="/bureau">Bureaux</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<UserOutlined />}>
                                <Link to="/floor">Un menu</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0, textAlign: 'center', fontSize: '1.5rem' }}>
                           Gestion des bureaux d'une école inconnue
                        </Header>
                        <Content className={"content"}>
                            <Routes>
                                <Route path="/bureau" element={<Main setRooms={setRooms}/>}/>
                                <Route path="/" element={<Main setRooms={setRooms}/> }/>
                                <Route path="/floor" element={<People/> }/>
                            </Routes>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>©2021 Created by Léo LECLERC - FIL A3</Footer>
                    </Layout>
                    </RoomsContext.Provider>
                </Router>
            </Layout>
        </Layout>
    );
}

export default App;
