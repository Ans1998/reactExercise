import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
// 登录
import login from './views/login/index'
// 注册
import register from './views/register/index'

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/login" component={login}></Route>
            <Route exact path="/register" component={register}></Route>
            <App />
        </Switch>
    </Router>, document.getElementById('root'))
