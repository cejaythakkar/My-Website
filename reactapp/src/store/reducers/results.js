import ActionType from '../actiontype';
const initialState = {
    results:[]
}

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case ActionType.STORE_RESULT:
            return {
                ...state,
                results : state.results.concat({
                    id:Date.now(),
                    value : action.payload
                })
            }
        case ActionType.DELETE_RESULT:
            return {
                ...state,
                results : state.results.filter(result => result.id !== action.payload)
            }
        default:
            return state
    }
}

export default reducer;