import React from 'react';
import {
    Form, Input, Button, Row, Col, message
} from 'antd';
import './index.css'
class Register extends  React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
        }
    }
    // 挂载函数
    componentWillMount() {
        console.log('componentWillMount')
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                let user = JSON.stringify(values)
                localStorage.setItem('user', user)
                message.success('注册成功');
                setTimeout(() => {
                    this.props.history.push('/login')
                }, 1800)
            }
        });
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('请再次输入相同的密码');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="register_content">
                <Row align="middle">
                    <Col span={12} offset={8}>
                        <Form onSubmit={this.handleSubmit.bind(this)} className="register_form">
                            <Form.Item
                                label="用户名"
                            >
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                    <Input placeholder="请输入用户名" />
                                )}
                            </Form.Item>
                            <Form.Item
                                label="密码"
                            >
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                },
                                    {
                                        validator: this.validateToNextPassword.bind(this),
                                    })(
                                    <Input type="password" placeholder="请输入密码" />
                                )}
                            </Form.Item>
                            <Form.Item
                                label="确认密码"
                            >
                                {getFieldDecorator('confirm', {
                                    rules: [{
                                        required: true, message: '请再次输入密码',
                                    }, {
                                        validator: this.compareToFirstPassword.bind(this),
                                    }],
                                })(
                                    <Input type="password" onBlur={this.handleConfirmBlur.bind(this)} />
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="register_form_button">
                                   提交
                                </Button>
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

export default Form.create({ name: 'Register' })(Register);
