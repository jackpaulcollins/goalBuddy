import React from 'react';
import NavBar from './layout/Navbar';
import Footer from './layout/Footer';
import styles from '../scss/styles.scss';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import SignedOutDashboard from './dashboard/SignedOutDashboard';
import PostDetail from './feed/PostDetail';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import CreateGoal from './goals/CreateGoal';
import GoalDetail from './goals/GoalDetail';

function App(){
  return (
    <div>
      <HashRouter>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/home' component={SignedOutDashboard}/>
            <Route path='/goal/:id' component={GoalDetail} />
            <Route path='/post/:id' component={PostDetail} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateGoal} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
