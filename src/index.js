// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Icon } from 'antd';
import RouterView from './router/router';
import PropTypes from 'prop-types';
import {BrowserRouter as Router,  Link} from "react-router-dom";
// import Main from "./views/main";
const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    static contextTypes = {
        router: PropTypes.object.isRequired
    };
    clickMenu(item, key, keyPath, domEvent) {
        console.log(this.context.router);
        this.context.router.history.push(key);
    }
    render() {
        return (
            <Router his>
                <Layout style={{height: '100vh'}}>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <Router>
                            <Menu theme="dark" mode="inline" onClick={this.clickMenu.bind(this)} defaultSelectedKeys={['1']}>
                                <Menu.Item key="1">
                                    <Icon type="user" />
                                    <span><Link to='/test'>设计模式</Link></span>
                                </Menu.Item>
                                <Menu.Item key="/test">
                                    <Icon type="video-camera" />
                                    <span>装饰者模式</span>
                                </Menu.Item>
                                <Menu.Item key="/main">
                                    <Icon type="upload" />
                                    <span>指令模式</span>
                                </Menu.Item>
                            </Menu>
                        </Router>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: '0 20px' }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <span>设计模式学习</span>
                        </Header>
                        <Content
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                background: '#fff',
                                minHeight: 280,
                            }}
                        >
                            <RouterView />
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

ReactDOM.render(<SiderDemo />, document.getElementById('root'));
