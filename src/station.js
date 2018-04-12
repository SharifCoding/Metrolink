// CONSTRUCTOR FUNCTION
function Station(name) {
  this.name = name;
}

// OBJECTS PROTOTYPE
Station.prototype.getName = function getName() {
  return this.name;
};

// EXPORTS FUNCTION
module.exports = {
  Station,
};
