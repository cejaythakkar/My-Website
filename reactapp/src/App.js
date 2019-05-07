import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import AboutList from './containers/about/aboutList';
import PassionList from './containers/passion/passion';
import AddAbout from './containers/about/aboutAdd';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/admin/about/" exact component={AboutList} />
          <Route path="/admin/passion" exact component={PassionList} />
          <Route path="/admin/about/add" exact component={AddAbout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
