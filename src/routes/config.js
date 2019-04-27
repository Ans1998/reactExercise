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
    }
]
export default routes
