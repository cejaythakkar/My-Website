import ActionType from '../actions/actiontype';
const initialState = {
    counter : 0
}

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case ActionType.INCREMENT:
            return {
                ...state,
                counter : state.counter + 1
            }
        case ActionType.DECREMENT:
            return {
                ...state,
                counter : state.counter - 1
            }
        case ActionType.ADD:
            return {
                ...state,
                counter : state.counter + action.payload
            }
        case ActionType.SUBTRACT:
            return {
                ...state,
                counter : state.counter - action.payload
            }
        case ActionType.RESET:
            return {
                ...state,
                counter : 0
            }
        default:
            return state
    }
}

export default reducer;