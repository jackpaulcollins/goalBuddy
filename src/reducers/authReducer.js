import { initialAuthState } from '../constants/initialState';
import c from './../constants';


export const authReducer = (state = initialAuthState, action) => {
  switch(action.type){
    case c.LOGIN_ERROR:
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }
    case c.LOGIN_SUCCESS:
      console.log('login sucess');
      return {
        ...state,
        authError: null,
      }
    case c.SIGNOUT_SUCCESS:
      console.log('signout sucess');
      return state;
    default:
      return state;
  }
};
