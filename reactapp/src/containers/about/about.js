import React from 'react';
import { Route , Switch } from 'react-router-dom'; 
import List from '../../components/body/about/about-list';
import Add from '../../components/body/about/about-add';
import View from '../../components/body/about/about-view';
import Config from '../../components/body/about/about-config';
import Edit from '../../components/body/about/about-edit';
import Header from '../../components/body/header/header';
import Navbar from '../../components/body/navbar/navbar';
import aboutdata from './aboutdata';
import './about.css';

export default class About extends React.Component{
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
        return (
            <section className="about-wrapper">
                <Header header={'About'} />
                <Navbar links={pathComponentMap} />
                <Switch>
                    {pathComponentMap.map(item => {
                        console.log(item.component);
                        return (
                            <Route exact path={item.path} render={() => <item.component data={item.data} />}></Route>
                        )
                    })}
                </Switch>
                
            </section>
        );
    }
}