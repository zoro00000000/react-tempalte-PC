/** 
 * 路由
 */

export default {
    menus: [
        { 
            key: '/home', 
            title: '首页', 
            icon: 'home', 
            component: 'Home' 
        },
        { 
            key: '/page1', 
            title: '第一页', 
            icon: 'shopping', 
            component: 'Page1' 
        },
        { 
            key: '/counter', 
            title: '加法', 
            icon: 'plus', 
            component: 'Counter' 
        },
        { 
            key: '/userinfo', 
            title: '用户信息', 
            icon: 'user', 
            component: 'UserInfo' 
        },
    ]
}