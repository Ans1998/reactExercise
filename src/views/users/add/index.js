import React from 'react';
import { Breadcrumb, message, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, } from 'antd';
import './index.css'

const { Option } = Select;

const residences = [{
    value: 'zhejiang',
    label: '浙江',
    children: [{
        value: 'hangzhou',
        label: '杭州',
        children: [{
            value: 'xihu',
            label: '西湖',
        }],
    }],
}, {
    value: 'jiangsu',
    label: '江苏',
    children: [{
        value: 'nanjing',
        label: '南京',
        children: [{
            value: 'zhonghuamen',
            label: '中华门',
        }],
    }],
}];

class UserAdd extends  React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: []
        }
    }
    // 挂载函数
    componentWillMount() {
        // console.log(this.props)
        console.log('componentWillMount')
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log(values);
                message.success('您点击了确定');
            }
        });
    }

    handleConfirmBlur(e) {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword(rule, value, callback) {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('输入的密码跟上次的不一样');
        } else {
            callback();
        }
    }

    validateToNextPassword(rule, value, callback) {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }
    // 页面渲染
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        return (
            <div className="userAdd">
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                    <Breadcrumb.Item>用户添加</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Item
                            label="用户名"
                        >
                            {getFieldDecorator('user', {
                                rules: [{
                                    required: true, message: '请输入用户名',
                                }],
                            })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item
                            label="密码"
                        >
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true, message: '请输入密码',
                                }, {
                                    validator: this.validateToNextPassword.bind(this),
                                }],
                            })(
                                <Input type="password" />
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
                        <Form.Item
                            label={(
                                <span>
              昵称&nbsp;
                                    <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
                            )}
                        >
                            {getFieldDecorator('nickname', {
                                rules: [{ required: true, message: '请输入昵称', whitespace: true }],
                            })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item
                            label="所在城市"
                        >
                            {getFieldDecorator('residence', {
                                initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                rules: [{ type: 'array', required: true, message: '请选择所在城市' }],
                            })(
                                <Cascader options={residences} />
                            )}
                        </Form.Item>
                        <Form.Item
                            label="手机号码"
                        >
                            {getFieldDecorator('phone', {
                                rules: [{ required: true, message: '请输入手机号码' }],
                            })(
                                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                            )}
                        </Form.Item>
                        <Form.Item
                            label="手机验证码"
                            extra="根据xxxxxxxxxxx需要绑定手机号码"
                        >
                            <Row gutter={8}>
                                <Col span={12}>
                                    {getFieldDecorator('captcha', {
                                        rules: [{ required: true, message: '请输入手机验证码' }],
                                    })(
                                        <Input />
                                    )}
                                </Col>
                                <Col span={12}>
                                    <Button>获取手机验证码</Button>
                                </Col>
                            </Row>
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            {getFieldDecorator('agreement', {
                                valuePropName: 'checked',
                            })(
                                <Checkbox>我已经认真阅读 <a href="javascript:;">测试条款</a></Checkbox>
                            )}
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">提交</Button>
                        </Form.Item>
                    </Form>
                </div>
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

export default Form.create({ name: 'userAdd' })(UserAdd);
