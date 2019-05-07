import * as React from 'react';
import { Link } from 'react-router-dom'
import './about.scss'
class AboutList extends React.Component{
    state = {
        aboutList : []
    }
    render(){
        return (
            <div className="about-list-container">
                <ul>
                    <li>
                        <Link to="/admin/about/add">Add New</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default AboutList;