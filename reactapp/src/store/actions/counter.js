import ActionType from './actiontype';
// action creators 
export const increment = ( payload ) => {
    return {
        type:ActionType.INCREMENT
    }
}
export const decrement = ( payload ) => {
    return {
        type:ActionType.DECREMENT
    }
}
export const add = ( payload ) => {
    return {
        type:ActionType.ADD,
        payload:payload
    }
}
export const subtract = ( payload ) => {
    return {
        type:ActionType.SUBTRACT,
        payload:payload
    }
}
export const reset = ( payload ) => {
    return {
        type:ActionType.RESET
    }
}