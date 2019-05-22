import * as types from './../constants/ActionTypes';

export const createPost = (post) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    console.log('fired')
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth;
    firestore.collection('posts').add({
      ...post,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(()=> {
      dispatch({type: types.CREATE_POST, post});
    }).catch((err) => {
      dispatch({ type: types.CREATE_POST_ERROR, err});
    });
  };
};

export const onNewLike = (id) => ({
  type: types.NEW_LIKE,
  id: id
});

