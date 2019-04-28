import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
// 登录
import login from './views/login/index'
// 注册
import register from './views/register/index'

import LayOut from './views/layout/index'
import './App.css'

class App extends  React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    // 挂载函数
    componentWillMount() {
        console.log(this.props)
        console.log('componentWillMount')
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={login}></Route>
                    <Route exact path="/register" component={register}></Route>
                    <LayOut></LayOut>
                </Switch>
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
