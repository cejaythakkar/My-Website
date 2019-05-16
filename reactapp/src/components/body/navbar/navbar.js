import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
    const navbarLinkList = props.links.map(item => {
        return (item.showInNavbar) ? (<li className="list-item px-2">
            <NavLink activeClassName="active" to={item.path}>{item.title}</NavLink>
        </li>) : null;
    });
    return (
        <div className="body-navbar-wrapper">
            <nav className="nav navbar p-0">
                <ul className="nav-list row justify-content-center w-100">
                    {navbarLinkList}
                </ul>
            </nav>
        </div>
    )
} 