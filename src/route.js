// CONSTRUCTOR FUNCTION
function Route() {
  this.stations = [];
}

// OBJECTS PROTOTYPE
Route.prototype.addStation = function addStation(station) {
  this.stations.push(station);
};

Route.prototype.getStations = function getStations() {
  return this.stations;
};

Route.prototype.getStartingStation = function getStartingStation() {
  return this.stations === [0];
};

// EXPORTS FUNCTION
module.exports = {
  Route,
};
