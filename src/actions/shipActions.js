import { shipConstants } from '../constants/shipConstants';
import { shipServices } from '../services/shipServices';

const getShipsTypes = () => {
  return (dispatch) => {
    shipServices
      .getShipTypes()
      .then((response) => {
        dispatch({
          type: shipConstants.GET_TYPES,
          payload: response,
        });
      })
      .catch((error) => {});
  };
}

export const shipActions = {
  getShipsTypes,
};