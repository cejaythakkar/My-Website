import React from 'react';
import { Route , Switch } from 'react-router-dom';
import About from '../about/about';
import Contact from '../contact/contact';
import Config from '../config/config';
export default class Body extends React.Component{
    render(){
        return (
            <div className="body-wrapper col-9">
                <Switch>
                    <Route path="/admin/about" component={About}/>
                    <Route path="/admin/contact" component={Contact}/>
                    <Route path="/admin/config" component={Config}/>
                </Switch>
            </div>
        )
    }
}