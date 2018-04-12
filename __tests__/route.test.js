// Require the `Route` function into the unit test.
const { Route } = require('../src/route');
/* globals describe it expect */

describe('Route', () => {
  // Testing Route constructor returns as an object.
  it('can be instantiated', () => {
    expect(new Route()).toBeInstanceOf(Object);
  });
  // Testing route.stations constructor returns as an array.
  it('sets the name property', () => {
    const stations = [];
    const route = new Route(stations);

    expect(route.stations).toEqual(stations);
  });
});

describe('addStation', () => {
  // Testing route.addStation from constructor.
  it('adds stations to Route', () => {
    const route = new Route();
    route.addStation = ['Altrincham', 'Navigation Road'];

    expect(route.addStation).toEqual(['Altrincham', 'Navigation Road']);
  });
});

describe('getStations', () => {
  // Testing route.getStations from constructor.
  it('get stations from constructor', () => {
    const route = new Route();
    route.addStation = ['Altrincham', 'Navigation Road'];

    expect(route.getStations()).toEqual(route.stations);
  });
});

describe('getStartingStation', () => {
  // Testing route.getStartingStation returns false.
  it('get stations from constructor', () => {
    const route = new Route();
    route.addStation = ['Altrincham', 'Navigation Road'];

    expect(route.getStartingStation()).toBeFalsy();
  });
});
