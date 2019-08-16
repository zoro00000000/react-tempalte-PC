// action: 计数器

export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT = 'counter/DECREMENT'
export const RESET = 'counter/RESET'

// 增
export function increment () {
    return {
        type: INCREMENT,
    }
}

// 减
export function decrement () {
    return {
        type: DECREMENT,
    }
}

// 重置
export function reset () {
    return {
        type: RESET,
    }
}
