import { initialGoalState } from '../constants/initialState';
import c from './../constants';


export const goalReducer = (state = initialGoalState, action) => {
  switch (action.type) {
  case c.CREATE_GOAL:
    console.log('created goal', action.goal);
    return state;
  case c.CREATE_GOAL_ERROR:
    console.log('create goal error', action.err);
    return state;
  case c.PARTNER_ON_GOAL:
    console.log('partner success');
    return state;
  case c.PARTNER_ON_GOALL_ERROR:
    console.log('partner error');
    return state;
  default:
    return state;
  }
};
