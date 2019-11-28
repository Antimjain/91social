import { authConstants } from '../constants/authConstants';
import { authServices } from '../services/authServices';

const doLogin = (username, password) => {
  return (dispatch) => {
    authServices
      .doLogin(username, password)
      .then((response) => {
        dispatch({
          type: authConstants.DO_LOGIN,
          payload: response,
        });
      })
      .catch((error) => {});
  };
}

export const authActions = {
  doLogin,
};