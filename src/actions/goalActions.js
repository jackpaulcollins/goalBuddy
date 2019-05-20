import * as types from './../constants/ActionTypes';


export const createGoal = (goal) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('goals').add({
      ...goal,
      authorFirstName: 'Jack',
      authorLastNameL: 'Collins',
      authorId: 12345,
      createdAt: new Date()
    }).then(()=> {
      dispatch({type: types.CREATE_GOAL, goal})
    }).catch((err) => {
      dispatch({type: types.CREATE_GOAL_ERROR, err})
    })
  }
};
