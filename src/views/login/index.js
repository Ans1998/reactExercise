import React from 'react';

import {
    Form, Icon, Input, Button, Checkbox, Row, Col, message
} from 'antd';
import './index.css'
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
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                // this.props.match.params.xxx
                // this.props.history.push('/')
                if (Boolean(localStorage.getItem('user'))) {
                    let userData = JSON.parse(localStorage.getItem('user'))
                    console.log(userData)
                    if (userData.userName !== values.userName && userData.password !== values.password) {
                        message.warning('请检查用户名或者密码')
                        return false
                    } else {
                        message.success('登陆成功');
                        setTimeout(() => {
                            this.props.history.push('/')
                        }, 1800)
                    }
                } else {
                    message.warning('请先注册账号');
                    return false
                }
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login_content">
                <Row align="middle">
                    <Col span={12} offset={10}>
                        <Form onSubmit={this.handleSubmit.bind(this)} className="login_form">
                            <Form.Item>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )}
                                <a className="login_form_forgot" href="javascript:;">忘记密码</a>
                                <Button type="primary" htmlType="submit" className="login_form_button">
                                    登录
                                </Button>
                                <a className="login_form_register" href="/#/register">注册账号</a>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
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

export default Form.create({ name: 'Login' })(Login);
