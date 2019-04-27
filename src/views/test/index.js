import React from 'react';
import { Breadcrumb, Table} from 'antd';


const columns = [

]


class Test extends  React.Component {
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
    }
    // 挂载函数
    componentWillMount() {
        // console.log(this.props)
        console.log('componentWillMount')
    }
    // 分页按钮切换
    handleTableChange(pagination) {
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

export default Test;
