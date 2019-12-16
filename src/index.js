import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Icon } from 'antd';
import RouterView from './router/router';
import {BrowserRouter as Router} from "react-router-dom";
import { createBrowserHistory } from "history";
const { Header, Sider, Content } = Layout;

const history = createBrowserHistory({
    forceRefresh: true        //是否强制刷新
});
class SiderDemo extends React.Component {
    state = {
        collapsed: false
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    clickMenu(item, key, keyPath, domEvent) {
        console.log(history);
        history.push(item.key);
    }
    render() {
        return (
            <Router history={history}>
                <Layout style={{height: '100vh'}}>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <Router>
                            <Menu theme="dark" mode="inline" onClick={this.clickMenu.bind(this)} defaultSelectedKeys={['1']}>
                                <Menu.Item key="/">
                                    <Icon type="user" />
                                    <span>首页</span>
                                </Menu.Item>
                                <Menu.Item key="/decorator">
                                    <Icon type="video-camera" />
                                    <span>装饰者模式</span>
                                </Menu.Item>
                                <Menu.Item key="/instruct">
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
