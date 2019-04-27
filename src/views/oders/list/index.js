import React from 'react';
import { Breadcrumb, Table } from 'antd';


const columns = [
    { title: '用户名', dataIndex: 'name', key: 'name' },
    { title: '消费金额', dataIndex: 'money', key: 'money' },
    { title: '消费类型', dataIndex: 'address', key: 'address' }
];


class OrderList extends  React.Component {
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
            loading: true // 加载(true显示/false不显)
        };
        for (let i = 0; i < 10; i++) {
            let res = {
                key: i,
                name: i + '用户',
                money: i + '.00',
                address: i % 2 === 0 ? '设备消费' : '钱包充值',
                description: i % 2 === 0 ? '2019-04-27:08:50密码机消费' + i + '.00元' : '2019-04-28:10:55演示2钱包充值' + i + '.00元'
            };
            this.state.data.push(res)
        }
    }
    // 挂载函数
    componentWillMount() {
        // console.log(this.props)
        console.log('componentWillMount')
    }
    // 分页按钮切换
    handleTableChange(pagination) {
        this.setState({
            pagination,
            loading: true
        });
        console.log(pagination);
        for (let i = (pagination.current * pagination.pageSize) - pagination.pageSize; i < pagination.current * pagination.pageSize; i++) {
            let res = {
                key: i,
                name: i + '用户',
                money: i + '.00',
                address: i % 2 === 0 ? '设备消费': '钱包充值',
                description: i % 2 === 0 ? '2019-04-27:08:50密码机消费'+ i + '.00元': '2019-04-28:10:55演示2钱包充值'+ i + '.00元'
            };
            this.state.data.push(res)
        }

        console.log(this.state.data);

        setTimeout(() => {
            this.setState({
                data: this.state.data,
                loading: false
            })
        }, 300)
    }
    // 页面渲染
    render() {
        return (
            <div className="home">
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>订单管理</Breadcrumb.Item>
                    <Breadcrumb.Item>订单列表</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                    <Table
                        columns={columns}
                        expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                        dataSource={this.state.data}
                        pagination={this.state.pagination}
                        loading={this.state.loading}
                        onChange={this.handleTableChange.bind(this)}
                    />
                </div>
            </div>
        );
    }
    // 页面加载完
    componentDidMount() {
        console.log('componentDidMount')
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 2500)
    }
    // 卸载函数
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}

export default OrderList;
