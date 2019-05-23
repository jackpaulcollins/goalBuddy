import * as types from './../constants/ActionTypes';


export const createGoal = (goal) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth;
    console.log(authorId)
    firestore.collection('goals').add({
      ...goal,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date(),
      buddies: [authorId.uid]
    }).then(()=> {
      dispatch({type: types.CREATE_GOAL, goal});
    }).catch((err) => {
      dispatch({type: types.CREATE_GOAL_ERROR, err});
    });
  };
};


export const partnerOnGoal = (goal, goalCreator, newPartner) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    console.log('made it', goal)
    const firestore = getFirestore();
    firestore.collection('goals').doc(goal).update({
      buddies: [goalCreator + newPartner]
    }).then(()=> {
      dispatch({type: types.PARTNER_ON_GOAL, goal});
    }).catch((err) => {
      dispatch({type: types.PARTNER_ON_GOAL_ERROR, err});
    });
  };
};

