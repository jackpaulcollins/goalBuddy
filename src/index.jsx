import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Profile from './components/signedInProfile/Profile';
import { applyMiddleware, createStore } from 'redux';
import { combineReducers, compose } from 'redux';
import { postReducer } from './reducers/postReducer';
import { authReducer } from './reducers/authReducer';
import { goalReducer } from './reducers/goalReducer'
import { initialState } from './constants/initialState';
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'





const rootReducer = combineReducers({post: postReducer,
                                     auth: authReducer,
                                     goal: goalReducer});

const store = createStore(rootReducer,
    compose(
     applyMiddleware(middlewareLogger, thunkMiddleware.withExtraArgument({getFirebase, getFirestore})),
     reduxFirestore(fbConfig),
     reactReduxFirebase(fbConfig)
   )
  )

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
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
