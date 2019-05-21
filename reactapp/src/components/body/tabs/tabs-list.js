import React from 'react'
import { NavLink } from 'react-router-dom';

export default function List(props) {
    
    const createNavLinks = (tabs) => {
        const tabList = [];
        for(let tab in props.tabs){
            let tabs = props.tabs;
            tabList.push(
                <li className="tab-item p-3" key={tab} title="click to configure its fields">
                <NavLink to={`/admin/tabs/${tab}`}>
                    <div className="card">
                        <div className="card-header">
                            <h3>{tabs[tab].tabName}</h3>
                        </div>
                        <div className="card-body">
                            <p>{tabs[tab].tabDescription}</p>
                        </div>
                    </div>
                </NavLink>
            </li>
            )
        }
        return tabList;
    }
    return (
        <div className="tab-list-wrapper">
            <ul className="tab-list row">
                {createNavLinks()}
            </ul>
        </div>
    )
}
