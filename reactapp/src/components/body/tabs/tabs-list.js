import React from 'react'
import { NavLink } from 'react-router-dom';

export default function List(props) {
    return (
        <div className="tab-list-wrapper">
            <ul className="tab-list row">
                {
                    props.tabs.map(tab => {
                        return (
                            <li className="tab-item p-3" key={tab._id} title="click to configure its fields">
                                <NavLink to={`/admin/tabs/${tab._id}`}>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3>{tab.tabName}</h3>
                                        </div>
                                        <div className="card-body">
                                            <p>{tab.tabDescription}</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}
