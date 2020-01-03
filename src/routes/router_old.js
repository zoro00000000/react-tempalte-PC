import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Link } from 'react-router-dom'
import loadable from '@loadable/component'

// import Home from '@page/home/home'
// import Page1 from '@page/page1/page1'
// import Counter from '@page/counter/counter'
// import UserInfo from '@page/user/userInfo'

const Home = loadable(() => import('@page/home/home'))
const Page1 = loadable(() => import('@page/page1/page1'))
const Counter = loadable(() => import('@page/counter/counter'))
const UserInfo = loadable(() => import('@page/user/userInfo'))

// 组件加载时 Loading占位
// const UserInfo = loadable(() => import('@page/user/userInfo'), {
//     fallback: Loading,
// })

// 引入图片
import imgLogo from '../../public/logo192.png'

const BasicRouter = () => (
    <Router>
        <div>
            <div>
                <img src={imgLogo} />
            </div>
            <ul>
                <li>
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/page1">Page1</Link>
                </li>
                <li>
                    <Link to="/Counter">Counter</Link>
                </li>
                <li>
                    <Link to="/UserInfo">UserInfo</Link>
                </li>
            </ul>

            <Route exact path="/" component={Home}/>
            <Route path="/page1" component={Page1}/>
            <Route path="/counter" component={Counter}/>
            <Route path="/userInfo" component={UserInfo}/>
        </div>
    </Router>
)

export default BasicRouter