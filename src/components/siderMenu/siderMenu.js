import React, { useState } from 'react'

import { 
    Menu, 
    Icon, 
} from 'antd'

import { BrowserRouter as Router, Link } from 'react-router-dom'

const MenuItem = Menu.Item
const MenuSubMenu = Menu.SubMenu

/**
 * item = item.route 菜单单独跳转的路由
 * @param {*} item 
 */
const renderMenuItem = (item) => (
    <MenuItem key={item.key}>
        <Link to={(item.route || item.key) + (item.query || '')}>
            {item.icon && <Icon type={item.icon} />}
            <span className="nav-text">{item.title}</span>
        </Link>
    </MenuItem>
)

/**
 * 二级嵌套菜单
 * @param {*} item 
 */
const renderSubMenu = item => (
    <MenuSubMenu
        key={item.key}
        title={
            <span>
                {item.icon && <Icon type={item.icon} />}
                <span className="nav-text">{item.title}</span>
            </span>
        }
    >
        {item.subs.map(item => renderMenuItem(item))}
    </MenuSubMenu>
)

export default ({ menus, ...restProps }) => {
    const [dragItems] = useState(menus)

    return (
        <div>
            {dragItems.map((item, index) => (
                <Menu {...restProps} key={item.key}>
                    {item.subs
                        ? renderSubMenu(item)
                        : renderMenuItem(item)}
                </Menu>
            ))}
        </div>
    )
}