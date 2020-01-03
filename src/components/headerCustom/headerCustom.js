
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { 
    Menu, 
    Icon, 
    Layout, 
    Badge, 
    Popover, 
} from 'antd'

const { Header } = Layout
const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

// 头像图片
const avater = require('../../../public/logo512.png')

class HeaderCustom extends Component {

    screenFull = () => {
        if (screenfull.enabled) {
            screenfull.request()
        }
    }

    logout = () => {
        console.log('退出登录')
    }

    render () {
        return (
            <Header>

                {/* header 右侧的 menu */}
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: '64px', float: 'right' }}
                    // onClick={this.menuClick}
                >
                    {/* <MenuItem key="pwa">
                        
                    </MenuItem> */}

                    {/* 全屏显示 */}
                    <MenuItem key="full" onClick={this.screenFull} >
                        <Icon type="arrows-alt" onClick={this.screenFull} />
                    </MenuItem>
                    
                    {/* 通知消息 */}
                    <MenuItem key="1">
                        <Badge count={25} overflowCount={10} style={{marginLeft: 10}}>
                            <Icon type="notification" />
                        </Badge>
                    </MenuItem>

                    {/* 个人中心 */}
                    <SubMenu title={<span className="avatar"><img width={'32px'} height={'32px'} src={avater} alt="头像" /><i className="on bottom b-white" /></span>}>
                        <MenuItemGroup title="用户中心">
                            <MenuItem key="setting:1">你好 - {this.props.user.userName}</MenuItem>
                            <MenuItem key="setting:2">个人信息</MenuItem>
                            <MenuItem key="logout"><span onClick={this.logout}>退出登录</span></MenuItem>
                        </MenuItemGroup>
                        <MenuItemGroup title="设置中心">
                            <MenuItem key="setting:3">个人设置</MenuItem>
                            <MenuItem key="setting:4">系统设置</MenuItem>
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>
            </Header>
        )
    }
}

export default withRouter(HeaderCustom)