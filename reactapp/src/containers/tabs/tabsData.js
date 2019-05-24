const tabData = {
  about: {
    tabInfo: {
      tabName: {
        type: "text",
        value: "About"
      },
      tabDescription: {
        type: "text",
        value:
          "This tab is about adding and showing something about you in the portfolio"
      },
      isConfigurable: {
        type: "checkbox",
        value: true
      }
    },
    configFormFields: {
      toShow: {
        fieldType: {
          type: "select",
          value: "boolean"
        },
        fieldName: { type: "text", value: "To Show" },
        fieldDescription: {type:"text",value:"This Field is to be shown in the portfolio or not?"},
        validations: {}
      },
      tabLabel: {
        fieldType: { type: "select", value: "string" },
        fieldName: { type: "text", value: "Tab label" },
        fieldDescription:{ type: "text", value: "This field is to edit/configure the label of the tab." },
        validations: {
          required: {
            label : 'Required',
            type: "checkbox",
            value: true
          },
          minLength: {
            label : 'Min Length',
            type: "number",
            value: 3
          },
          maxLength: {
            label : 'Max Length',
            type: "number",
            value: 15
          }
        }
      }
    }
  },
  contact: {
    _id: 2,
    tabName: "Contact",
    tabDescription:
      "This Tab is about configuring and adding your contact information",
    isConfigurable: true,
    configFormFields: {
      toShow: {
        fieldType: "boolean",
        fieldName: "To Show",
        fieldDescription: "This Field is to be shown in the portfolio or not?",
        validations: {
          required: true
        }
      },
      tabLabel: {
        fieldType: "string",
        fieldName: "Tab Label",
        fieldDescription:
          "This field is to edit/configure the label of the tab.",
        validations: {
          required: true,
          minLength: 3,
          maxLength: 15
        }
      }
    }
  }
};

export default tabData;
