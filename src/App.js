import React from 'react';
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes/config'
import LeftMenu from './views/leftMenu/index'
import { Layout } from 'antd';
const { Content, Footer } = Layout;
class App extends  React.Component {
    componentWillMount() {
        console.log(this.props)
    }
    render() {
        return (
            <Router>
                <Layout style={{minHeight: '100vh'}}>
                    {/*左变导航栏*/}
                    <LeftMenu></LeftMenu>
                    <Layout>
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
}

export default App;
