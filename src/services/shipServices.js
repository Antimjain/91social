import axios from 'axios';

const parseShipTypes = shipTypes => {
	let ships = {};
	shipTypes.forEach(shipType => {
		ships[shipType.ship_type] = ships[shipType.ship_type] !== undefined ? ships[shipType.ship_type]+1 : 1;
	});
	return ships;
}

const getShipTypes = () => {
  const requestOptions = {
    method: 'get',
    url: `https://api.spacexdata.com/v3/ships`,
    params: {
      filter: 'ship_type',
    },
  };
  return new Promise((resolve, reject) => {
		axios(requestOptions)
    .then(response => {
			if ( response.status === 200 ) {
				resolve(parseShipTypes(response.data))			
			}
			reject([]);
		})});
}


export const shipServices = {
  getShipTypes,
};
