export const arrayToURILatLng = array => {
  const isArray = array instanceof Array;
  if (isArray === false) {
    return 'param missing';
  }

  return array.map(value => {
    return `${value.lat},${value.lng}`;
  }).join('|');

};