import React, { Component } from 'react';
import { Switch , Route } from 'react-router-dom';
import tabData from './tabsData';
import List from '../../components/body/tabs/tabs-list';
import Details from '../../components/body/tabs/tab-details';
import './tabs.scss';
export default class Tabs extends Component {
    state = {
        tabs: tabData
    }
    render() {
        return (
            <section className="tabs-wrapper" id="tabs-wrapper">
                <Switch>
                    <Route path="/admin/tabs" exact render={() => <List tabs={this.state.tabs} />}></Route>
                    <Route path="/admin/tabs/:tabId" component={Details}></Route>
                </Switch>
            </section>
        )
    }
}
