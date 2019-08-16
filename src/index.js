import React from "react"
import ReactDom from "react-dom"
// jsx热更处理
import { AppContainer } from "react-hot-loader"
import { Provider } from 'react-redux'
import store from './redux/store'

// 引入 antd 全局样式
import 'antd/dist/antd.css'


// 引入路由
import BasicRouter from '@routes/router'

/*** *
 * !需放在最上部来初始化创建 id=root 的DOM
 * 在body下 创建一个 id为 root 的 div
 */ 
const Div = document.createElement("div")
Div.setAttribute("id", "root")
document.body.appendChild(Div)

/*初始化*/
renderWithHotReload(BasicRouter())

/*热更新*/
if (module.hot) {
    module.hot.accept('@routes/router', () => {
        const basicRouter = require('@routes/router').default
        renderWithHotReload(basicRouter())
    })
}

function renderWithHotReload(RootElement) {
    // render 中只有两个参数，第二个参数是 dom 元素
    ReactDom.render(
        <AppContainer>
            {/* 绑定redux */}
            <Provider store={store}>
                {RootElement}
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}