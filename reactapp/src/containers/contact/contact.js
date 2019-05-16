import React from 'react';
import List from '../../components/body/contact/contact-list';
import Add from '../../components/body/contact/contact-add';
import Config from '../../components/body/contact/contact-config';

export default class Contact extends React.Component{
    render(){
        return (
            <section className="about-wrapper">
                <List />
                <Add />
                <Config />
            </section>
        );
    }
}