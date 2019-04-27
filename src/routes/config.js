// 首页
import home from '../views/home/index'
// 用户管理
import userList from '../views/users/list/index'
import userAdd from '../views/users/add/index'
// 订单管理
import orderList from '../views/oders/list/index'
// 登录
import login from '../views/login/index'
// 注册
import register from '../views/register/index'
const routes = [
    // 首页
    {
        path: "/",
        exact: true,
        component: home
    },
    // 用户管理
    {
        path: "/userList",
        component: userList
    },
    {
        path: "/userAdd",
        component: userAdd
    },
    // 订单管理
    {
        path: "/orderList",
        component: orderList
    },
    // 登录
    {
        path: "/login",
        component: login
    },
    // 注册
    {
        path: "/register",
        component: register
    }
]
export default routes
