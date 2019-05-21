import * as types from './../constants/ActionTypes';

export const onNewPost = (post) => ({
  type: types.NEW_POST,
  post: post
});

export const onNewLike = (id) => ({
  type: types.NEW_LIKE,
  id: id
});