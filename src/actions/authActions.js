import * as types from './../constants/ActionTypes';

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: types.LOGIN_SUCCESS });
    }).catch((err) => {
      dispatch({ type: types.LOGIN_ERROR, err });
    })
  }
}


export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: types.SIGNOUT_SUCCESS});
    })
  }
}
