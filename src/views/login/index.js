import React from 'react';

class Login extends  React.Component {
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
    render() {
        return (
            <div className="login_content">
                登录
            </div>
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

export default Login;
