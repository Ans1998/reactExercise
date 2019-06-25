import React from 'react';
import { Breadcrumb, Menu, Icon, Tooltip} from 'antd';
import './index.css'

import { fabric } from 'fabric'

const { SubMenu }  = Menu;

class Drawing extends  React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            type: ''
        }
    }
    // 挂载函数
    componentWillMount() {
    }
    handleClick = e => {
        console.log(e.key);
        this.setState({
            type: e.key
        })
    };
    render() {
        return (
            <div className="home">
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>画板管理</Breadcrumb.Item>
                    <Breadcrumb.Item>画画功能</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                    <Menu onClick={this.handleClick.bind(this)} mode="horizontal">
                        <SubMenu title={<Icon type="dashboard" style={{ fontSize: '24px'}}  />}>
                            <Menu.Item key="redDashboard">
                                <Tooltip title="红色" placement="top">
                                    <Icon type="dashboard" style={{ fontSize: '24px', color: 'red' }} />
                                </Tooltip>
                            </Menu.Item>
                            <Menu.Item key="blueDashboard">
                                <Tooltip title="蓝色" placement="top">
                                    <Icon type="dashboard" style={{ fontSize: '24px', color: 'blue' }} />
                                </Tooltip>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="eye-invisible" disabled>
                            <Tooltip title="护眼模式" placement="top">
                                <Icon type="eye-invisible" style={{ fontSize: '24px'}} />
                            </Tooltip>
                        </Menu.Item>
                        <SubMenu title={<Icon type="edit" style={{ fontSize: '24px'}} />}>
                            <Menu.Item key="edit">
                                <Tooltip title="铅笔" placement="top">
                                    <Icon type="edit" style={{ fontSize: '24px'}} />
                                </Tooltip>
                            </Menu.Item>
                            <Menu.Item key="highlight">
                                <Tooltip title="触笔" placement="top">
                                    <Icon type="highlight" style={{ fontSize: '24px'}} />
                                </Tooltip>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="delete">
                            <Tooltip title="橡皮擦" placement="top">
                                <Icon type="delete" style={{ fontSize: '24px'}} />
                            </Tooltip>
                        </Menu.Item>
                    </Menu>

                    <canvas id="canvasMain"></canvas>
                </div>
            </div>
        );
    }
    // 页面加载完
    componentDidMount() {
        var width, height = ['', ''];
        var canvas = new fabric.Canvas('canvasMain');
        // 鼠标点击
        canvas.on('mouse:down', function(options) {
            [width, height] = [options.e.clientX, options.e.clientY];
            console.log(options.e.clientX, options.e.clientY)
        })
        // 鼠标移动
        canvas.on('mouse:move', function(options) {
            // console.log(options)
        })
        // 鼠标
        canvas.on('mouse:up', function(options) {
            console.log(options.e.clientX, options.e.clientY)
            console.log(options.e.clientX-width,options.e.clientY-height)
            var rect = new fabric.Rect({
                x: options.pointer.x,//距离画布左侧的距离，单位是像素
                y: options.pointer.y,//距离画布上边的距离
                fill:'red',//填充的颜色
                width: options.e.clientX-width,//方形的宽度
                height: options.e.clientY-height//方形的高度
            });
            canvas.add(rect);
            console.log(options)

        })
    }
    // 卸载函数
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}

export default Drawing;
