/**
 * auth （true登录访问 | false直接访问）
 */
// 首页
import home from '../views/home/index'
// 用户管理
import userList from '../views/users/list/index'
import userAdd from '../views/users/add/index'
// 订单管理
import orderList from '../views/oders/list/index'
// 爬虫管理
import reptilesSelect from '../views/reptiles/select/index'
import fileList from '../views/reptiles/fileList/index'
import fileCsvList from '../views/reptiles/fileCsvList/index'
import dataProcessing from '../views/reptiles/dataProcessing/index'
const routes = [
    // 首页
    {
        path: "/",
        exact: true,
        auth: true,
        component: home
    },
    // 用户管理
    {
        path: "/userList",
        auth: true,
        component: userList
    },
    {
        path: "/userAdd",
        auth: true,
        component: userAdd
    },
    // 订单管理
    {
        path: "/orderList",
        auth: true,
        component: orderList
    },
    // 爬虫管理
    {
        path: "/reptilesSelect",
        auth: true,
        component: reptilesSelect
    },
    // 文件列表
    {
        path: "/fileList",
        auth: true,
        component: fileList
    },
    // csv文件
    {
        path: "/fileCsvList",
        auth: true,
        component: fileCsvList
    },
    // 数据处理
    {
        path: "/dataProcessing",
        auth: true,
        component: dataProcessing
    },
    // 其他页面
    {
        path: '*',
        component: home
    }
]
export default routes
