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
    // 其他页面
    {
        path: '*',
        component: home
    }
]
export default routes
