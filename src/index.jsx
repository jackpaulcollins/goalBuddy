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
import { postReducer } from './reducers/post-reducer';
import { likeReducer } from './reducers/like-reducer';
import { initialState } from './constants/initialState';
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';





const rootReducer = combineReducers({post: postReducer});
const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));


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
