// Require the `Tram` function into the unit test.
// Require the `Route` function into the unit test.
const { Tram } = require('../src/tram');
// const { Route } = require('../src/route');
/* globals describe it expect */

describe('Tram', () => {
  // Testing Tram constructor returns as an object.
  it('can be instantiated', () => {
    expect(new Tram()).toBeInstanceOf(Object);
  });
  // Testing properties within the constructor.
  it('sets the Tram properties', () => {
    const route = ('Piccadilly');
    const startingStation = ('Altrincham');
    const tram = new Tram(route, startingStation);

    expect(tram.route).toEqual(route);
    expect(tram.currentStation).toEqual(startingStation);
  });
});

describe('getCurrentStation', () => {
  // Testing tram.getCurrentStation from constructor.
  it('get current station from constructor', () => {
    const tram = new Tram('Piccadilly', 'Altrincham');

    expect(tram.getCurrentStation()).toEqual(tram.currentStation);
  });
});

describe('drive', () => {
  // Testing tram.drive 'end of the line' message.
  it('next station equals to last station', () => {

  });
  // Testing tram.drive 'now arriving at' message.
  it('next station equals to not last station', () => {

  });
});

describe('reset', () => {
  // Testing tram.reset from constructor.
  it('current station resets to Route.getStations', () => {

  });
});
