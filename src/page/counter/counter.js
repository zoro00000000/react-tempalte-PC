import React, {Component} from 'react'
import { increment, decrement, reset } from  '@redux/actions/counter'
// import {connect} from 'react-redux'

import {
    Button,
} from 'antd'

// @connect(({ counter }) => ({
//     counter
// }))
class Counter extends Component {
    render () {
        return (
            <div>
                <div>当前计数为(显示redux计数)</div>
                <Button type="primary" onClick={() => {console.log('调用自增函数');}}>自增</Button>
                <Button type="primary" onClick={() => {console.log('调用自减函数');}}>自减</Button>
                <Button type="primary" onClick={() => {console.log('调用重置函数');}}>重置</Button>
            </div>
        )
    }
}


// const mapStateToProps = (state) => {
//     return {
//         counter: state.counter
//     }
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => {
//             dispatch(increment())
//         },
//         decrement: () => {
//             dispatch(decrement())
//         },
//         reset: () => {
//             dispatch(reset())
//         }
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter