import ActionType from '../actions/actiontype';
const initialState = {
    showSpinner : 'none'
}

const reducer = (state = initialState,actionType) => {
    switch(actionType.type){
        case ActionType.SHOW_SPINNER:
            return {
                ...state,
                showSpinner:'block'
            }
        case ActionType.HIDE_SPINNER:
        return {
            ...state,
            showSpinner:'none'
        }
        default:
            return state
    }
}

export default reducer;