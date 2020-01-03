import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import combineReducers from './reducers'

/**
 * 为了让action创建函数除了返回action对象外，还可以返回函数，我们需要引用redux-thunk
 * 使用redux-thunk中间件
 */
let store = createStore(combineReducers, applyMiddleware(thunkMiddleware))

// redux 热更新替换
if (module.hot) {
    module.hot.accept("./reducers", () => {
        const nextCombineReducers = require("./reducers").default
        store.replaceReducer(nextCombineReducers)
    })
}


export default store