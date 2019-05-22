import * as types from './../constants/ActionTypes';

export const createPost = (post) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    console.log(post)
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

export const newLike = (post) => {
  return (dispatch, getState, {getFirebase, getFirestore})  => {
    console.log(post.id)
    const firestore = getFirestore();
    firestore.collection('posts').doc(post.id).update({
      likes: (post.likes + 1)
    }).then(()=> {
      dispatch({type: types.NEW_LIKE, post});
    }).catch((err) => {
      dispatch({ type: types.NEW_LIKE_ERROR, err});
    });
  };
};
