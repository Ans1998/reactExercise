import React from 'react';
import { Breadcrumb, Table, Badge, Menu, Dropdown, Icon, Modal, message} from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
            强制下线
        </Menu.Item>
        <Menu.Item>
            提示下线
        </Menu.Item>
    </Menu>
);

const confirm = Modal.confirm;

// 父表
const columns = [
    { title: '用户名称', dataIndex: 'name', key: 'name' },
    { title: '在线设备', dataIndex: 'platform', key: 'platform' },
    { title: '手机版本', dataIndex: 'version', key: 'version' },
    { title: '项目金额', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: '所在范围', dataIndex: 'creator', key: 'creator' },
    { title: '操作', key: 'operation', render: (text, record) => (
        <div>
            <a href="javascript:;" onClick={userDetails.bind(this, record)}>详情</a>   <a href="javascript:;" onClick={userDele.bind(this, record)}>删除</a>
        </div>
        )  },
];
// 用户详情点击
let userDetails = (record) => {
    console.log(record)
}
// 用户删除点击
let userDele = (record) => {
    console.log(record)
    confirm({
        title: '温馨提示',
        content: '您确定要删除该用户',
        okText: '确定',
        okType: 'danger',
        cancelText: '取消',
        onOk() {
            message.success('您点击了确定');
        },
        onCancel() {
            message.warning('您点击了取消');
        },
    });
}
// 子表
const expandedRowRender = () => {
    const columns = [
        { title: '登录来源', dataIndex: 'platform', key: 'platform' },
        { title: '浏览器版本', dataIndex: 'version', key: 'version' },
        { title: '登录时间', dataIndex: 'createdAt', key: 'createdAt' },
        { title: '登录状态', key: 'state', render: () => <span><Badge status="success" />登录成功</span> },
        {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            render: () => (
                <span className="table-operation">
                    <a href="javascript:;">下线处理</a>
                    <Dropdown overlay={menu}>
                      <a href="javascript:;">
                        <Icon type="down" />
                      </a>
                    </Dropdown>
                </span>
            ),
        },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
        data.push({
            key: i,
            platform: i%2 === 0 ? '微信浏览器' : '支付宝浏览器',
            version: '10.3.4.5654',
            createdAt: '2014-12-24 23:12:00'
        });
    }
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
        />
    );
};

class UserList extends  React.Component {
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
        }
        for (let i = 0; i < 10; ++i) {
            this.state.data.push({
                key: i,
                name: i + '用户',
                platform: i%2 === 0 ? 'iOS' : 'Android',
                version: '10.3.4.5654',
                upgradeNum: 500,
                creator: i%2 === 0 ? '广州' : '湖南',
                createdAt: '2014-12-24 23:12:00',
            });
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
            this.state.data.push({
                key: i,
                name: i + '用户',
                platform: i%2 === 0 ? 'iOS' : 'Android',
                version: '10.3.4.5654',
                upgradeNum: 500,
                creator: i%2 === 0 ? '广州' : '湖南',
                createdAt: '2014-12-24 23:12:00',
            });
        }
        console.log(this.state.data);
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 300)
    }
    render() {
        return (
            <div className="home">
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                    <Breadcrumb.Item>用户列表</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                    <Table
                        columns={columns}
                        expandedRowRender={expandedRowRender}
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

export default UserList;
