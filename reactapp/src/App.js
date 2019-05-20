import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Todos from './containers/todos/todos';
import Counter from './containers/counter/counter';
import Body from './containers/body/body';
import Spinner from './components/common/spinner/spinner';
import Sidebar from './containers/sidebar/sidebar';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Spinner />
        <div className="App container-fluid row">
          <Sidebar />
          <Body />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
