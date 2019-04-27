import React from 'react';
import {  Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class LeftMenu extends  React.Component {
    componentWillMount() {
        console.log(this.props)
    }
    render() {
        return (
            <Sider
                collapsible
            >
                {/*<div className="logo">*/}
                {/*<img src="" alt=""/>*/}
                {/*</div>*/}
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Link to='/'>
                            <Icon type="home"/>
                            <span>首页</span>
                        </Link>
                    </Menu.Item>

                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="user"/><span>用户管理</span></span>}
                    >
                        <Menu.Item key="3">
                            <Link to='/userList'>用户列表</Link>
                        </Menu.Item>
                        <Menu.Item key="4"><Link to='/userAdd'> 用户添加</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="shopping-cart"/><span>订单管理</span></span>}
                    >
                        <Menu.Item key="6"><Link to='/orderList'>订单列表</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}

export default LeftMenu;
