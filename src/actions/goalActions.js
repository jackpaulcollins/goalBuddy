import * as types from './../constants/ActionTypes';


export const createGoal = (goal) => {
  return (dispatch, getState) => {
    dispatch({type: types.ADD_GOAL, goal})
  }
};
