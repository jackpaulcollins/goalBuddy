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


export const partnerOnGoal = (goal, goalId, newPartner) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
      const stringNewPartner = newPartner.toString();
      const partnerArray = [goal.buddies[0],stringNewPartner]
      const firestore = getFirestore();
      firestore.collection('goals').doc(goalId).update({
        buddies: partnerArray
    }).then(()=> {
      dispatch({type: types.PARTNER_ON_GOAL, goal});
    }).catch((err) => {
      dispatch({type: types.PARTNER_ON_GOAL_ERROR, err});
    });
  };
};

