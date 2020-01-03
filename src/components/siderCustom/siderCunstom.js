import React, { Component } from 'react'

import { Layout } from 'antd'
import { withRouter } from 'react-router-dom'
// 引入路由
import routes from '../../routes/config'

const { Sider } = Layout

import SiderMenu from '../siderMenu/siderMenu'

// 引入样式
import siderStyles from './siderCunstom.less'

class SiderCustom extends Component {
    state = {
        mode: 'inline',
        openKey: '',
        selectedKey: '',
        firstHide: true, // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
        collapsed: false,
    }

    static setMenuOpen = props => {
        const { pathname } = props.location
        return {
            openKey: pathname.substr(0, pathname.lastIndexOf('/')),
            selectedKey: pathname
        }
    }

    componentDidMount () {
        const state = SiderCustom.setMenuOpen(this.props)

        this.setState(state)
    }

    /**
     * menu 点击的时候
     *
     * @memberof SiderCustom
     */
    menuClick = e => {
        console.log('menu click')
        this.setState({
            selectedKey: e.key
        })
        const { popoverHide } = this.props // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
        popoverHide && popoverHide()
    }

    /**
     * menu 打开的时候
     *
     * @memberof SiderCustom
     */
    openMenu = v => {
        this.setState({
            openKey: v[v.length - 1],
            firstHide: false,
        })
    }

    render () {
        const { selectedKey, openKey, firstHide, collapsed } = this.state

        return (
            <Sider
                trigger={null}
                breakpoint="lg"
                collapsible
                collapsed={collapsed}
                style={{ overflowY: 'auto' }}
            >
                <div className={siderStyles.logo}></div>
                
                <SiderMenu
                    menus={routes.menus}
                    onClick={this.menuClick}
                    mode="inline"
                    theme={'dark'}
                    selectedKeys={[selectedKey]}
                    openKeys={firstHide ? null : [openKey]}
                    onOpenChange={this.openMenu}
                >
                </SiderMenu>

                <style>
                {`
                    #nprogress .spinner{
                        left: ${collapsed ? '70px' : '206px'};
                        right: 0 !important;
                    }
                `}
                </style>
            </Sider>
        )
    }

}

// export default SiderCustom
export default withRouter(SiderCustom)