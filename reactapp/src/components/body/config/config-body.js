import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

class Body extends React.Component {
    
    render() {
        let routes = [];
        const createInput = (item) => {
            switch(item.type) {
                case 'boolean':
                        return <input type="checkbox" value={item.value} />
                case 'string':
                        return <input type="text" value={item.value} />
            }
        }
        for (let item in this.props.configdata) {
            let sectionData = this.props.configdata[item];
            routes.push((
                <Route exact to={`/admin/config/${item}`} render={() => {
                    return (
                        <div className="config-section-wrapper">
                            {`hello ${item}`}
                        </div>
                    )
                }} />
            ));
        }
        return (
            <div className="config-body-wrapper">
                <Switch>
                    {routes}
                </Switch>
            </div>
        );
    }
}

export default Body;