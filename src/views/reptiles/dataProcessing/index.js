import React from 'react';
import axios from 'axios' ;
import './index.css'

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';

import 'echarts/lib/chart/pie' // 饼图

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import { Breadcrumb, Input, message, Form, Icon, Button, Select, Row, Col} from 'antd';
const InputGroup = Input.Group;
const { Option } = Select;



class DataProcessing extends  React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            list: [],
            name: []
        }
    }
    // 挂载函数
    componentWillMount() {
        console.log('请求查询数据库')
        this.__request()
    }
    render() {
        return (
            <div className="home">
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>爬虫管理</Breadcrumb.Item>
                    <Breadcrumb.Item>数据分析</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                    <div className="select_content">
                        <Row>
                            <Col>
                                {/* 折线图 */}
                                <div id="pie" style={{height: 600 }}></div>
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
    test() {
        // 饼图
        var pie = echarts.init(document.getElementById('pie'));
        // 绘制图表
        pie.setOption({
            title:{ text:'统计图' },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                data: this.state.name
            },
            series : [
                {
                    name: '数据统计',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data: this.state.list,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
    }
    __request() {
        let  url="http://localhost:5000/api/getToDB"
        let form = {}
        console.log(form)
        axios.post(url, form)
            .then( (response) => {
                const data = response.data
                console.log(data);
                if (data.code === '200') {
                    this.setState({
                        dataList: data.data.res
                    })
                    console.log(this.state.dataList)
                    this.state.dataList.forEach((val) => {
                        let legalPrice = val.legalPrice.substr(1, val.legalPrice.length)
                        let l = {
                            value: parseFloat(legalPrice),
                            name: val.name
                        }
                        this.state.list.push(l)
                        this.state.name.push(val.name)
                    })
                    console.log('---this.state.list---')
                    console.log(this.state.list)
                    console.log('---this.state.name---')
                    console.log(this.state.name)
                    message.success(data.msg)
                    this.test()
                } else {
                    message.warning(data.msg)
                }
            })
            .catch( (error) => {
                console.log(error);
            });
    }
    // 卸载函数
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}
export default Form.create({ name: 'DataProcessing' })(DataProcessing);
