import { combineReducers } from 'redux';

import { authReducers } from './authReducers';
import { shipReducers } from './shipReducers';

const rootReducer = combineReducers({
  authReducers,
  shipReducers,
});

export default rootReducer;