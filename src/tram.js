// CONSTRUCTOR FUNCTION
function Tram(route, startingStation) {
  this.route = route;
  this.currentStation = startingStation;
}

// OBJECTS PROTOTYPE
Tram.prototype.getCurrentStation = function getCurrentStation() {
  return this.currentStation;
};

Tram.prototype.drive = function drive() {
  const routeStations = this.route.getStations();
  const currentStationIndex = routeStations.indexOf(this.currentStation);
  const nextStationIndex = currentStationIndex + 1;

  if (nextStationIndex >= routeStations.length) {
    return 'end of the line';
  }
  this.currentStation = routeStations[nextStationIndex];
  // string concatenation > return 'now arriving at : ' + this.currentStation.getName();
  return `now arriving at : ${this.currentStation.getName()}`;
};

Tram.prototype.reset = function reset() {
  // array destructuring > this.currentStation = this.route.getStations()[0];
  [this.currentStation] = this.route.getStations();
};

// EXPORTS FUNCTION
module.exports = {
  Tram,
};
