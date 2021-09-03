import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Home from './components/Home'
import HomeMenu from './components/Home-Menu';
import Login from './components/Login'
import Registration from './components/Registration'

class App extends Component {
  render() {
    return <HashRouter>
      <>
        <HomeMenu />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/registration' component={Registration} />
        </Switch>
      </>
    </HashRouter>;

  }
};
export default App;
