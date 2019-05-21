import React from 'react';
import { Route , Switch } from 'react-router-dom'; 
import { connect } from 'react-redux';
import List from '../../components/body/about/about-list';
import Add from '../../components/body/about/about-add';
import View from '../../components/body/about/about-view';
import Config from '../../components/body/about/about-config';
import Edit from '../../components/body/about/about-edit';
import Navbar from '../../components/body/navbar/navbar';
import aboutdata from './aboutdata';
import ActionType from '../../store/actions/actiontype';
import './about.css';
import './about.scss';

class About extends React.Component{
    state = {
        data:aboutdata
    }
    render(){
        const pathComponentMap=[
            {
                title:'Home',
                path:'/admin/about',
                component:List,
                data:this.state.data,
                showInNavbar:true
            },
            {
                title:'Add',
                path:'/admin/about/add',
                component:Add,
                showInNavbar:true
            },
            {
                path:'/admin/about/:_id',
                component:View,
                showInNavbar:false
            },
            {
                path:'/admin/about/edit/:_id',
                component:Edit,
                showInNavbar:false
            },
            {
                title:'config',
                path:'/admin/about/config',
                component:Config,
                showInNavbar:true
            }
        ];
        this.props.showSpinner()
        setTimeout(() => {
            this.props.hideSpinner()
        },2000)
        return (
            <section className="about-wrapper">
                <Navbar links={pathComponentMap} />
                <Switch>
                    {pathComponentMap.map(item => {
                        return (
                            <Route exact path={item.path} render={() => <item.component data={item.data} />}></Route>
                        )
                    })}
                </Switch>
            </section>
        );
    }
}

const mapDispatchActionToProps = ( dispatch ) => {
    return {
        showSpinner: (payload) => {
            dispatch({
                type:ActionType.SHOW_SPINNER,
                payload:payload
            })
        },
        hideSpinner: (payload) => {
            dispatch({
                type:ActionType.HIDE_SPINNER,
                payload:payload
            })
        }
    }
}
export default connect(null,mapDispatchActionToProps)(About);