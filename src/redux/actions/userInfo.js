export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST"
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS"
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL"

// 获取 userInfo 请求
export function getUserInfoRequest () {
    return {
        type: GET_USER_INFO_REQUEST,
    }
}

// 获取 userInfo 成功
export function getUserInfoSuccess () {
    return {
        type: GET_USER_INFO_SUCCESS,
    }
}

// 获取 userInfo 失败
export function getUserInfoFail () {
    return {
        type: GET_USER_INFO_FAIL,
    }
}

// 获取用户信息接口
export function getUserInfo () {
    return function (dispatch) {
        dispatch(getUserInfoRequest());

        return fetch('http://localhost:7777/static/user.json')
            .then((response => {
                return response.json()
            }))
            .then((json) => {
                    dispatch(getUserInfoSuccess(json))
                }
            ).catch(
                () => {
                    dispatch(getUserInfoFail())
                }
            )
    }
}