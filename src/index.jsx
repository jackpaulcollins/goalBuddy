import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  likes: 5
}
function likeReducer(state = initialState, action ){
  return state;
}
const store = createStore(likeReducer);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Component/>
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
