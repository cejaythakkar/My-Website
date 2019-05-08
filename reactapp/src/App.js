import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import AboutList from './containers/about/aboutList';
import PassionList from './containers/passion/passion';
import AddAbout from './containers/about/aboutAdd';
import Todos from './containers/todos/todos';
import PostWrapper from './containers/posts/postwrapper';
import './App.css';
import store from './store';

class App  extends React.Component{

  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/admin/about/" exact component={AboutList} />
              <Route path="/admin/passion" exact component={PassionList} />
              <Route path="/admin/about/add" exact component={AddAbout} />
              <Route path="/admin/todos" exact render={() => <Todos />} />
              <Route path="/admin/posts" exact render={() => <PostWrapper />} />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
