const configdata = {
    "123" : {
        label : "about",
        isConfigurable : true,
        fields : [
            {
                title : 'To Show',
                type :'boolean',
                value : false
            },
            {
                title : 'Title',
                type : 'string',
                value : 'About'
            }
        ]
    },
    "456" : {
        label: "contact",
        isConfigurable : true,
        fields : [
            {
                title : 'To Show',
                type :'boolean',
                value : false
            },
            {
                title : 'Title',
                type : 'string',
                value : 'Contact'
            }
        ]
    },
    "789" : {
        label : "config",
        isConfigurable : false
    }
}

export default configdata;