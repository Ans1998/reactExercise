import React from 'react';
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routes from './routes/config'
import LeftMenu from './views/leftMenu/index'
import './App.css'

import { Layout, Menu, Icon } from 'antd';

const { Content, Header, Footer } = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends  React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    // 挂载函数
    componentWillMount() {
        console.log('componentWillMount')
    }
    handleClick(e) {
        console.log(e);
    }
    render() {
        return (
            <Router>
                <Layout style={{minHeight: '100vh'}}>
                    {/*左变导航栏*/}
                    <LeftMenu></LeftMenu>
                    <Layout>
                        {/*头部*/}
                        <Header style={{ background: '#fff', padding: 0}}>
                            <div className="app_menu_content">
                                <Menu
                                    onClick={this.handleClick.bind(this)}
                                    selectedKeys={[this.state.current]}
                                    mode="horizontal"
                                >
                                <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />设置</span>}>
                                    <MenuItemGroup title="操作菜单">
                                        <Menu.Item key="myInfo">个人信息</Menu.Item>
                                        <Menu.Item key="loginOut">退出登录</Menu.Item>
                                    </MenuItemGroup>
                                </SubMenu>
                                </Menu>
                            </div>
                        </Header>
                        {/*内容*/}
                        <Content style={{margin: '0 16px'}}>
                            {/*内容路由*/}
                            {renderRoutes(routes)}
                        </Content>
                        {/*底部*/}
                        <Footer style={{textAlign: 'center'}}>
                            react练习项目
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
    // 页面加载完
    componentDidMount() {
        console.log('componentDidMount')
    }
    // 卸载函数
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}

export default App;
