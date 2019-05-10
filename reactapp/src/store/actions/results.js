import ActionType from './actiontype';

export const saveResult = (payload) => {
    return {
        type:ActionType.STORE_RESULT,
        payload:payload
    }
}

// Asynchronous action creator

export const storeResult = ( payload ) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(saveResult(payload))
        },2000);
    }
}
export const deleteResult = ( payload ) => {
    return {
        type:ActionType.DELETE_RESULT,
        payload:payload
    }
}