import React from 'react';
import {  Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';

import { withRouter } from 'react-router-dom'

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class LeftMenu extends  React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    // 挂载函数
    componentWillMount() {
        console.log('left')
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
                <Menu theme="dark" defaultSelectedKeys={[this.props.location.pathname]} mode="inline">
                    <Menu.Item key="/">
                        <Link to='/'>
                            <Icon type="home"/>
                            <span>首页</span>
                        </Link>
                    </Menu.Item>

                    <SubMenu
                        key="user"
                        title={<span><Icon type="user"/><span>用户管理</span></span>}
                    >
                        <Menu.Item key="/userList">
                            <Link to='/userList'>用户列表</Link>
                        </Menu.Item>
                        <Menu.Item key="/userAdd">
                            <Link to='/userAdd'> 用户添加</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="order"
                        title={<span><Icon type="shopping-cart"/><span>订单管理</span></span>}
                    >
                        <Menu.Item key="/orderList">
                            <Link to='/orderList'>订单列表</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="reptile"
                        title={<span><Icon type="android"/><span>爬虫管理</span></span>}
                    >
                        <Menu.Item key="/reptilesSelect">
                            <Link to='/reptilesSelect'>抓取节点</Link>
                        </Menu.Item>

                        <SubMenu key="sub3" title="文件列表">
                            <Menu.Item key="/fileList">
                                <Link to='/fileList'>抓取文件列表</Link>
                            </Menu.Item>
                            <Menu.Item key="/fileCsvList">
                                <Link to="/fileCsvList">csv文件列表</Link>
                            </Menu.Item>
                        </SubMenu>

                        <Menu.Item key="/dataProcessing">
                            <Link to='/dataProcessing'>数据分析</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="drawing"
                        title={<span><Icon type="fund"/><span>画板管理</span></span>}
                    >
                        <Menu.Item key="/drawing">
                            <Link to='/drawing'>画板功能</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}

export default withRouter(LeftMenu);
