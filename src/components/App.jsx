import React from 'react';
import NavBar from './layout/Navbar';
import Body from './signedInProfile/Body';
import Footer from './layout/Footer';
import styles from '../scss/styles.scss';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import PostDetail from './feed/PostDetail';
import SignIn from './auth/SignIn';

function App(){
  return (
    <div>
      <HashRouter>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/post/:id' component={PostDetail} />
            <Route path='/signin' component={SignIn} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
