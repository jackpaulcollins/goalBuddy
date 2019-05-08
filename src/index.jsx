import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Profile from './components/Profile';
import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux';
import logger from 'redux-logger';


const initialState ={
  userPosts: 'Test Post'
};

function likeReducer(state = initialState, action ){
  switch (action.type) {
  case 'LIKE':
    return {
      likes: state.likes  + 1
    };
  default:
    return state;
  }
}

function postReducer(state = initialState, action){
  switch (action.type){
  case 'POST':
    return{
      userPosts: 'Test'
    };
  default:
    return state;
  }
}




const rootReducer = combineReducers({like: likeReducer, post: postReducer});
const store = createStore(rootReducer, applyMiddleware(logger));

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Component} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </HashRouter>
    </Provider>,
    document.getElementById('react-app-root')
  );
};

render(App);
/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
/*eslint-enable */
