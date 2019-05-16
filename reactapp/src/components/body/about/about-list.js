import * as React from 'react';
import { Link } from 'react-router-dom'

class List extends React.Component {
    render() {
        const list = this.props.data.map(item => {
            return (
                <li key={item._id}>
                    <Link to={`/admin/about/${item._id}`}>
                        <div className="about-item-container card my-3 p-4">
                            <div className="img-container"></div>
                            <h3 className="title">{item.title}</h3>
                            <h5 className="subtitle">{item.subTitle}</h5>
                            <p className="place">{item.place}</p>
                            <p className="description">{item.description}</p>
                        </div>
                    </Link>
                </li>
                        )
                    })
                    return (
            <div className="about-list-container">
                            <ul className="about-item-list">
                                {list}
                            </ul>
                        </div>
                        );
                    }
                }
                
export default List;