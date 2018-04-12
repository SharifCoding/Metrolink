// Require the `Station` function into the unit test.
const { Station } = require('../src/station');
/* globals describe it expect jest */

describe('Station', () => {
  // Testing Station constructor returns as an object.
  it('can be instantiated', () => {
    expect(new Station()).toBeInstanceOf(Object);
  });
  // Testing the name property on the object being created by the Station constructor.
  it('sets the name property', () => {
    const name = jest.fn();
    const station = new Station(name);

    expect(station.name).toEqual(name);
  });
});

describe('getName', () => {
  // Testing station.getName returns valid value.
  it('returns valid station name', () => {
    const station = new Station('Piccadilly Gardens');

    expect(station.getName()).toEqual('Piccadilly Gardens');
  });
});
