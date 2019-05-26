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
import Profile from './signedInProfile/Profile'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import PartneredGoalDetail from './signedInProfile/PartneredGoalDetail'

library.add(faHeart)

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
            <Route path='/profile' component={Profile} />
            <Route path='/activegoal/:id' component={PartneredGoalDetail}/>

          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
