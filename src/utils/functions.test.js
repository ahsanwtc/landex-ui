import { arrayToURILatLng } from './functions';

describe('arrayToURILatLng', () => {
  it('should receive an array', () => {
    const result = arrayToURILatLng();
    expect(result).toBe('param missing');
  });

  it('should return string', () => {
    const param = [{ lat: 1, lng: 2 }, { lat: 3, lng: 4 }, { lat: 5, lng: 6 }];
    const result = arrayToURILatLng(param);
    expect(result).toBe('1,2|3,4|5,6');
  });


});