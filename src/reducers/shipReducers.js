import { shipConstants } from '../constants/shipConstants';

const initState = {
  shipTypes: {},
};

const shipReducers = (state = initState, action) => {
  switch (action.type) {
    case shipConstants.GET_TYPES:
      return {...state, shipTypes: action.payload};
    default:
      return state;
  }
};

export { shipReducers };