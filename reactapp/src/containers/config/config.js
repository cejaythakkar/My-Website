import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../../components/body/config/config-navbar';
import Body from '../../components/body/config/config-body';
import configdata from './configdata';

class Config extends React.Component {
    state = {
        configdata: { ...this.props.config }
    }

    onChangeHandler = (event , section_id,field_id,sectionData,value) => {
        const index = sectionData.fields.findIndex(item => (item.title === field_id)),
              newItem = sectionData.fields.filter(item => (item.title === field_id))[0];
        newItem.value = event.target.value;
        let newFields = [...sectionData.fields];
        newFields[index] = newItem;
        this.setState({
            configdata :{
                ...this.state.configdata,
                section_id : {
                    ...this.state.configdata.section_id,
                    fields:newFields
                }
            }
        })
    }
    render() {
        let routes = [];
        console.log(this.props.config)
        const createInput = (item,section_id,field_id,sectionData) => {
            switch (item.type) {
                case 'boolean':
                    return <input name="" type="checkbox" value={item.value} onChange={( e ) => {
                        this.onChangeHandler(e , section_id,field_id,sectionData)
                    }} />
                case 'string':
                    return <input type="text" value={item.value} onChange={
                        ( e ) => {
                            this.onChangeHandler(e , section_id,field_id,sectionData)
                        }
                    } />
            }
        }
        for (let item in this.state.configdata) {
            let sectionData = this.state.configdata[item];
            routes.push((
                <Route exact path={`/admin/config/${sectionData.label}`} render={() => {
                    return (
                        <div className="config-section-wrapper">
                            {
                                (sectionData.isConfigurable) ?
                                    sectionData.fields.map(fielditem => {
                                        return (
                                            <React.Fragment>
                                                <label for="">
                                                    {fielditem.title}
                                                </label>
                                                {
                                                    createInput(fielditem,item,fielditem.title,sectionData)
                                                }
                                            </React.Fragment>
                                        )
                                    }) : null
                            }
                            <button type="button" onClick={() => {
                                console.log(this.state.configdata[item]);
                                this.props.onChangeConfig({key:item,data: this.state.configdata[item]})
                            }}>Submit</button>
                        </div>
                    )
                }}></Route>
            ));
        }
        return (
            <section className="config-wrapper">
                <Navbar configdata={this.state.configdata} />
                <Switch>
                    {routes}
                </Switch>
            </section>
        );
    }
}

const mapStateWithProps = state => {
    return {
        config : state.config
    }
}
const mapDispatchwithProps = dispatch => {
    return {
        onChangeConfig : (payload) => {
            dispatch({type:'CHANGE_CONFIG',payload});
        }
    }
}
export default connect(mapStateWithProps,mapDispatchwithProps)(Config);