import React from 'react';
import axios from 'axios' ;
import './index.css'
import { Breadcrumb, Form, Table, Divider, message, Modal} from 'antd';

class ReptilesCsv extends  React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            data: [], // 表数据
            pagination: { // 分页
                current: 1, // 默认第一页
                total: 100, // 总数
                pageSize: 10 // 页面个数
            },
            loading: true, // 加载(true显示/false不显)
            fileName: ''
        }
    }
    // 挂载函数
    componentWillMount() {
        this.__request()
    }

    render() {
        const columns = [
            { title: '文件名', dataIndex: 'name', key: 'name' },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>

        <a href={ 'http://127.0.0.1:5000/getCsvFile/' + record.name} target="_blank" >查看</a>
                <Divider type="vertical" />
                <a href="javascript:;" onClick={this.delFile.bind(this, record.name)}>删除</a>
      </span>
                ),
            },
        ]
        return (
            <div className="home">
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>爬虫管理</Breadcrumb.Item>
                    <Breadcrumb.Item>文件列表</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                    <div className="select_content">
                        <Table
                            columns={columns}
                            dataSource={this.state.data}
                            pagination={this.state.pagination}
                            loading={this.state.loading}
                            onChange={this.handleTableChange.bind(this)}
                        />

                    </div>
                </div>
            </div>
        );
    }
    // 分页按钮切换
    handleTableChange(pagination) {
    }
    handleOk = () => {
        let  url="http://localhost:5000/api/getCsvFile/del"
        let form = {
            'fileName': this.state.fileName
        }
        console.log(form)
        axios.post(url, form)
            .then( (response) => {
                const data = response.data
                console.log(data);
                if (data.code === '200') {
                    message.success(data.msg);
                    setTimeout(() => {
                        this.setState({
                            loading: true
                        })
                        this.__request()
                    }, 1800)
                } else {
                    message.warning(data.msg);
                }
            })
            .catch( (error) => {
                console.log(error);
            });
    };
    handleCancel = () => {
        console.log('取消')
    };
    delFile(fileName) {
        this.setState({
            fileName: fileName
        });
        Modal.confirm({
            title: '温馨提示',
            content: '您确认删除' + fileName + '文件嘛?',
            okText: '确认',
            cancelText: '取消',
            onCancel: this.handleCancel,
            onOk: this.handleOk
        });
    }
    __request() {
        let  url="http://localhost:5000/api/getCsvFile/list"
        let form = {}
        console.log(form)
        axios.post(url, form)
            .then( (response) => {
                const data = response.data
                console.log(data);
                if (data.code === '200') {
                    let pagination = Object.assign({}, this.state.pagination, {
                        total: data.data.total
                    })
                    this.setState({
                        loading: false,
                        pagination,
                        data: data.data.list
                    })
                    // this.state.data.push(data.data.list)
                    console.log(this.state)
                    // Dismiss manually and asynchronously
                    // message.success(data.data);
                } else {
                    // message.warning(data.error)
                }
            })
            .catch( (error) => {
                console.log(error);
            });
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
export default Form.create({ name: 'ReptilesCsv' })(ReptilesCsv);
