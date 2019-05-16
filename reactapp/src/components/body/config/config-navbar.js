import * as React from 'react';
import { NavLink } from 'react-router-dom';
export default class Navbar extends React.Component{
    render(){
        const navlinks = [];
        for(let section in this.props.configdata){
            let sectionData = this.props.configdata[section];
            if(sectionData.isConfigurable)
                navlinks.push((<li className="list-item px-2"><NavLink to={`/admin/config/${sectionData.label}`}>{sectionData.label}</NavLink></li>))
        }
        return (
            <div className="config-navbar-wrapper">
                <nav className="nav navbar">
                    <ul className="config-navbar-list row d-flex w-100 justify-content-center">
                        {navlinks}
                    </ul>
                </nav>
            </div>
        )
    }
}