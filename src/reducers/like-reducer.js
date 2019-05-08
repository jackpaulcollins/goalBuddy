import { initialState } from '../constants/initialState';
import c from './../constants';

export function likeReducer(state = initialState, action){
  switch (action.type){
  case c.NEW_LIKE:
    alert('generated from like reducer')
  default:
    return state;
  }
}
