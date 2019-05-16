import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function SidebarBody(props) {
    const navlinks = []
    for (let item in props.config) {
        const cnf = props.config[item];
        navlinks.push((
            <li className="navbar-list-item">
                <NavLink to={`/admin/${cnf.label}`}>
                    {(cnf.fields)? cnf.fields.filter(item => item.title === 'Title')[0].value : cnf.label}
                </NavLink>
            </li>
        ))
    }
    return (
        <div className="sidebar-body-wrapper">
            <nav className="nav navbar">
                <ul className="navbar-list">
                    {navlinks}
                </ul>
            </nav>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        config: state.config
    }
}
export default connect(mapStateToProps)(SidebarBody);