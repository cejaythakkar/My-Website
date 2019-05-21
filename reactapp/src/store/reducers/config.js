import ActionType from '../actions/actiontype';

const initialState = {
    "123": {
        label: "about",
        isConfigurable: true,
        fields: [
            {
                id:'to_show',
                title: 'To Show',
                type: 'boolean',
                value: false
            },
            {
                id:'title',
                title: 'Title',
                type: 'string',
                value: 'About'
            }
        ]
    },
    "456": {
        label: "contact",
        isConfigurable: true,
        fields: [
            {
                id:'to_show',
                title: 'To Show',
                type: 'boolean',
                value: false
            },
            {
                id:'title',
                title: 'Title',
                type: 'string',
                value: 'Contact'
            }
        ]
    },
    "789": {
        label: "config",
        isConfigurable: false
    },
    "134": {
        label: "Tabs",
        isConfigurable: false
    }
};

const reducer = (state = initialState , action ) => {
    switch(action.type){
        case 'CHANGE_CONFIG' : 
            return {
                ...state,
                [action.payload.key] : action.payload.data  
            }
        default:
            return state;
    }
}

export default reducer;