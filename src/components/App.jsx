import React from 'react';
import NavBar from './layout/Navbar';
import Body from './signedInProfile/Body';
import Footer from './layout/Footer';
import styles from '../scss/styles.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import PostDetail from './feed/PostDetail';

function App(){
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/post/:id' component={PostDetail}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
