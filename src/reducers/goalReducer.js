import { initialGoalState } from '../constants/initialState';
import c from './../constants';


export const goalReducer = (state = initialGoalState, action) => {
  switch (action.type) {
    case c.ADD_GOAL:
      console.log('created goal', action.goal)
  }
  return state
}
