import * as types from './../constants/ActionTypes';


export const createGoal = (goal) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth;
    firestore.collection('goals').add({
      ...goal,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(()=> {
      dispatch({type: types.CREATE_GOAL, goal});
    }).catch((err) => {
      dispatch({type: types.CREATE_GOAL_ERROR, err});
    });
  };
};
