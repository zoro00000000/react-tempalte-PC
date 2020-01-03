import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import queryString from 'query-string'
import DocumentTitle from 'react-document-title'

import routesConfig from './config'
import AllComponents from '../page'

export default class BasicRouter extends Component {
    /**
     * 授权失败后 重定向
     *
     * @memberof BasicRouter
     */
    requireAuth = (permission, component) => {
        const { auth } = this.props
        const { permissions } = auth.data
        // 授权失败到404页面，成功则返回组件
        if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />
        return component
    }

    /**
     * 是否需要重新登录
     *
     * @memberof BasicRouter
     */
    requireLogin = (component, permission) => {
        const { auth } = this.props
        // ! 如果授权为空，则代表不需要授权
        if (!auth) return component

        const { permissions } = auth.data
        // 线上环境的情况下 判断是否需要登录
        if (process.env.NODE_ENV === 'production' && !permissions) {
            // 线上环境判断是否登录
            return <Redirect to={'/login'} />
        }
        return permission ? this.requireAuth(permission, component) : component
    }

    render () {
        return (
            <Switch>
                <Fragment>
                    {Object.keys(routesConfig).map(key => {
                        return routesConfig[key].map(r => {
                            {/* 遍历 component */}
                            const route = r => {
                                const Component = AllComponents[r.component]

                                return (
                                    <Route
                                        key={r.route || r.key}
                                        exact
                                        path={r.route || r.key}
                                        // component={Component}
                                        render={props => {
                                            const reg = /\?\S*/g
                                            // 匹配?及其以后字符串
                                            const queryParams = window.location.hash.match(reg)
                                            // 去除?的参数
                                            const { params } = props.match
                                            Object.keys(params).forEach(key => {
                                                params[key] =
                                                    params[key] && params[key].replace(reg, '')
                                            });
                                            props.match.params = { ...params }

                                            // 将参数合并
                                            // ? 将url上获取到的参数 转化为 对象格式 使用了插件 query-string （queryString）
                                            const merge = {
                                                ...props,
                                                query: queryParams
                                                    ? queryString.parse(queryParams[0])
                                                    : {},
                                            }
                                            // 重新包装组件
                                            const wrappedComponent = (
                                                <DocumentTitle title={r.title}>
                                                    <Component {...merge} />
                                                </DocumentTitle>
                                            )
                                            // TODO: 授权处理 是但会到 404 页面 还是登陆页面
                                            // return wrappedComponent
                                            // 正式版本
                                            return r.login
                                                ? wrappedComponent
                                                : this.requireLogin(wrappedComponent, r.auth)
                                        }}
                                    />
                                )
                            }

                            return r.component ? route(r) : r.subs.map(r => route(r))
                        })
                    })}
                </Fragment>
            </Switch>
        )
    }
}