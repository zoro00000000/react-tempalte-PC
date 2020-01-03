/**
 * 路由引出文件
 */
// 按需加载插件
import loadable from '@loadable/component'

const Home = loadable(() => import('@page/home/home'))
const Page1 = loadable(() => import('@page/page1/page1'))
const Counter = loadable(() => import('@page/counter/counter'))
const UserInfo = loadable(() => import('@page/user/userInfo'))

export default {
    Home,
    Page1,
    Counter,
    UserInfo,
}