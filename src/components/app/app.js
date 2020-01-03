import React, {Component} from  'react'

import { 
    Layout, 
    notification, 
    Icon, 
    // demo
    Menu,
} from 'antd'

import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'

import BasicRouter from '@routes/index'
import SiderCustom from '@components/siderCustom/siderCunstom'
import HeaderCustom from '../headerCustom/headerCustom'

const { Content, Footer, Sider } = Layout

class App extends Component {
    state = {
        collapsed: true,
        title: '',
    }

    render () {
        const { collapsed } = this.state
        const { auth = { data: {} }, } = this.props

        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    {/* old */}
                    {/* <BasicRouter/> */}

                    {/* new */}
                    <SiderCustom collapsed={collapsed} />

                    <Layout style={{ flexDirection: 'column' }}>
                        <HeaderCustom
                            toggle={this.toggle}
                            collapsed={collapsed}
                            user={auth.data || {}}
                        />

                        <Content style={{ margin: '24px', overflow: 'initial', flex: '1 1 0' }}>
                            <BasicRouter />
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}

export default App