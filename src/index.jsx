import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Profile from './components/Profile';

const initialState = {
  userPosts: ['test post'],
  likes: 0
}
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


const store = createStore(likeReducer);
store.dispatch({ type: "LIKE"})

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
