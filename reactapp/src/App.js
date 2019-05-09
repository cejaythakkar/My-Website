import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import AboutList from './containers/about/aboutList';
import PassionList from './containers/passion/passion';
import AddAbout from './containers/about/aboutAdd';
import Todos from './containers/todos/todos';
import Counter from './containers/counter/counter';
import PostWrapper from './containers/posts/postwrapper';
import './App.css';

class App  extends React.Component{

  render(){
    return (
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/admin/about/" exact component={AboutList} />
              <Route path="/admin/passion" exact component={PassionList} />
              <Route path="/admin/about/add" exact component={AddAbout} />
              <Route path="/admin/todos" exact render={() => <Todos />} />
              <Route path="/admin/posts" exact render={() => <PostWrapper />} />
              <Route path="/admin/counter" exact render={() => <Counter />} />
            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
