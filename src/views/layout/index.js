import React from 'react';
// import { renderRoutes } from 'react-router-config' // 不符合业务要求所以自己封装
import renderRoutes from '../../routes/index' // 路由拦截器
import routes from '../../routes/config'
import { withRouter } from 'react-router-dom'
import LeftMenu from '../leftMenu/index'
import { Layout, Menu, Icon } from 'antd';

const authed = false // 如果登陆之后可以利用redux修改该值(关于redux不在我们这篇文章的讨论范围之内）
const authPath = '/login' // 默认未登录的时候返回的页面，可以自行设置

const { Content, Header, Footer } = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LayOut extends  React.Component  {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    // 挂载函数
    componentWillMount() {
    }
    // 设置点击
    handleClick(e) {
        console.log(this.props)
        console.log(e);
        if (e.key === 'loginOut') {
            this.props.history.push('/login')
        }
    }
    render() {
        return (
            <div className="app_content">
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
                            {renderRoutes(routes, authed, authPath)}
                        </Content>
                        {/*底部*/}
                        <Footer style={{textAlign: 'center'}}>
                            react练习项目
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        )
        ;
    }
    // 页面加载完
    componentDidMount() {
    }
    // 卸载函数
    componentWillUnmount() {
    }
}

export default withRouter(LayOut);
