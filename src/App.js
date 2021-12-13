import {Layout, Menu} from 'antd';

import {useState} from "react";

import './App.css';
import "antd/dist/antd.css";

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {DesktopOutlined, UserOutlined} from "@ant-design/icons";
import Main from "./component/Main";

const { Header, Content, Footer, Sider } = Layout;
function App() {

    const [collapsed, setCollapsed] = useState(false);


    let onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Layout className="site-layout">
                <Router>
                    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<UserOutlined />}>
                                <Link to="/bureau">My Profile</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<DesktopOutlined />}>
                                <Link to="/floor">My Profile</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                           Gestion des bureaux de POUDLARD
                        </Header>
                        <Content className={"content"}>
                            <Routes>
                                <Route path="/bureau" element={<Main/>}/>
                                <Route path="/" element={<Main/>}/>
                            </Routes>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>©2021 Created by Léo LECLERC - FIL A3</Footer>
                    </Layout>
                </Router>
            </Layout>
        </Layout>
    );
}

export default App;
