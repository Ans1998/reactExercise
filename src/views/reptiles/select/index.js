import React from 'react';
import axios from 'axios' ;
import './index.css'
import { Breadcrumb, Input, message, Form, Icon, Button, Select, Row, Col} from 'antd';
const InputGroup = Input.Group;
const { Option } = Select;


let id = 0;

class ReptilesSelect extends  React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    // 挂载函数
    componentWillMount() {
    }
    remove = k => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    };

    add = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                let arr = [];
                arr.push({
                    'website': values.website
                });
                values.val.forEach((vals, valIndex) => {
                    values.key.forEach((val, keyIndex) => {
                        if (valIndex === keyIndex) {
                            arr.push({
                                'key': val,
                                'val': vals
                            });
                        }
                    });
                });
                console.log(arr);
                this.request(JSON.stringify(arr))
            }
        });
    };
    request(val) {
        console.log(val)
        let  url="http://localhost:5000/api/get"
        let form = val
        console.log(form)
        const hide = message.loading('正在爬取网页', 0);
        axios.post(url, form)
            .then(function (response) {
                let data = response.data
                console.log(data);
                if (data.code === '200') {
                    // Dismiss manually and asynchronously
                    hide()
                    message.success(data.msg);
                } else {
                    message.warning(data.msg)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => (
            <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? '节点' : ''}
                required={false}
                key={k}
            >
                {getFieldDecorator(`val[${k}]`, {
                    validateTrigger: ['onChange', 'onBlur'],
                    rules: [
                        {
                            required: true,
                            whitespace: true,
                            message: "请输入爬取的节点",
                        },
                    ],
                })(<InputGroup compact>
                    {getFieldDecorator(`key[${k}]`, {
                        initialValue: 'class'
                    })(
                        <Select>
                            <Option value="class">class</Option>
                            <Option value="id">id</Option>
                            <Option value="tag">tag</Option>
                        </Select>
                    )}
                    <Input placeholder="请输入爬取的节点" style={{ width: '60%', marginRight: 8 }} />
                    {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            onClick={() => this.remove(k)}
                        />
                    ) : null}
                </InputGroup>)}


            </Form.Item>
        ));
        return (
            <div className="home">
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>爬虫管理</Breadcrumb.Item>
                    <Breadcrumb.Item>抓取节点</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                    <div className="select_content">
                        <Row>
                            <Col>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Item>
                                        {getFieldDecorator('website', {
                                            rules: [{ required: true, message: '请输入抓取网站' }],
                                        })(
                                            <Input prefix={<Icon type="environment" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入抓取网站" />
                                        )}
                                    </Form.Item>
                                    <div style={{color: '#999', paddingBottom: 20}}>
                                        注意选择抓取table标签(不包含table标签)
                                    </div>
                                    {formItems}
                                    <Form.Item {...formItemLayoutWithOutLabel}>
                                        <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                                            <Icon type="plus" /> 添加节点
                                        </Button>
                                    </Form.Item>
                                    <Form.Item {...formItemLayoutWithOutLabel}>
                                        <Button type="primary" htmlType="submit">
                                            抓取
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </div>
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
export default Form.create({ name: 'ReptilesSelect' })(ReptilesSelect);
