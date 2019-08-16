import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserInfo} from '@redux/actions/userInfo'

import {
    Button,
} from 'antd'


@connect((state) => ({userInfo: state.userInfo}), {getUserInfo})
class UserInfo extends Component {
    render () {
        const {userInfo, isLoading, errorMsg} = this.props.userInfo
        console.log(this.props)

        return (
            <div>
                {
                    isLoading ? '信息请求中......':
                        (
                            errorMsg ? errorMsg :
                                <div>
                                    <p>用户信息：</p>
                                    <p>用户名：{userInfo.name}</p>
                                    <p>介绍：{userInfo.intro}</p>
                                </div>
                        )
                }
                <Button type="primary" onClick={() => this.props.getUserInfo()}>请求用户信息</Button>
            </div>
        )
    }
}

export default UserInfo