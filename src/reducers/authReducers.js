import { authConstants } from '../constants/authConstants';

const initState = {
	isLoggedIn: false,
	user: '',
};

const authReducers = (state = initState, action) => {
  switch (action.type) {
    case authConstants.DO_LOGIN:
      return {...state, isLoggedIn: true, user: action.payload};
    default:
      return state;
  }
};

export { authReducers };