import React from 'react';
import NavBar from './layout/Navbar';
import Body from './signedInProfile/Body';
import Footer from './layout/Footer';
import styles from '../scss/styles.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
function App(){
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path='/' component={Dashboard}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
