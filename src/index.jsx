import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { combineReducers, compose } from 'redux';
import { postReducer } from './reducers/postReducer';
import { authReducer } from './reducers/authReducer';
import { goalReducer } from './reducers/goalReducer';
import { initialState } from './constants/initialState';
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import { firestoreReducer } from 'redux-firestore';
import{ firebaseReducer } from 'react-redux-firebase';




const rootReducer = combineReducers({
  post: postReducer,
  auth: authReducer,
  goal: goalReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

const store = createStore(rootReducer,
  compose(
    applyMiddleware(middlewareLogger, thunkMiddleware.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, { userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true })
  )
);

store.firebaseAuthIsReady.then(() => {
  const render = (Component) => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('react-app-root')
    );
  };
  render(App);
});



/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
/*eslint-enable */
