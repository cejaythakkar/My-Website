const tabData =  [
    {
        _id:1,
        tabName:'About',
        tabDescription : 'This tab is about adding and showing something about you in the portfolio',
        isConfigurable:true,
        configFields:[
            {
                fieldType:'boolean',
                fieldName:'To Show',
                fieldDescription:'This Field is to be shown in the portfolio or not?',
                validations:{
                    required:true
                }
            },
            {
                fieldType:'string',
                fieldName:'Tab Label',
                fieldDescription:'This field is to edit/configure the label of the tab.',
                validations:{
                    required:true,
                    minLength:3,
                    maxLength:15
                }
            }
        ]
    },
    {
        _id:2,
        tabName:'Contact',
        tabDescription : 'This Tab is about configuring and adding your contact information',
        isConfigurable:true,
        configFields:[
            {
                fieldType:'boolean',
                fieldName:'To Show',
                fieldDescription:'This Field is to be shown in the portfolio or not?',
                validations:{
                    required:true
                }
            },
            {
                fieldType:'string',
                fieldName:'Tab Label',
                fieldDescription:'This field is to edit/configure the label of the tab.',
                validations:{
                    required:true,
                    minLength:3,
                    maxLength:15
                }
            }
        ]
    }
];

export default tabData;