import React from 'react';
import Header from '../../components/sidebar/header/header';
import SidebarBody from '../../components/sidebar/sidebar-body/sidebarbody';
import Footer from '../../components/sidebar/footer/footer';
import './sidebar.scss';
export default class Sidebar extends React.Component{
    render(){
        return (
            <div className="sidebar-wrapper col-3">
                <Header />
                <SidebarBody />
                <Footer />
            </div>
        )
    }
}