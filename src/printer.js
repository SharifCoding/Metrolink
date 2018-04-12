/* globals Route Station Tram $ */

const stationNames = [
  'Altrincham',
  'Navigation Road',
  'Timperley',
  'Brooklands',
  'Sale',
  'Dane Road',
  'Stretford',
  'Old Trafford',
  'Trafford Bar',
  'Cornbrook',
  'Deansgate-Castlefield',
  'St Peter\'s Square',
  'Piccadilly Gardens',
  'Piccadilly',
];

const altrinchamToPiccadilly = new Route();

const stations = $.each(stationNames, (stationIndex, stationName) => {
  altrinchamToPiccadilly.addStation(new Station(stationName));
});

const tram = new Tram(altrinchamToPiccadilly, altrinchamToPiccadilly.getStations()[0]);

function updateDOM() {
  $('#stations').html('');

  $.each(altrinchamToPiccadilly.getStations(), (stationIndex, station) => {
    let css = '';
    if (tram.getCurrentStation() === station) {
      css = '-current';
    }

    let stationHTML = '<div class="station">';
    stationHTML += `<div class="circle ${css}"></div>`;
    stationHTML += `<div class="name">${station.getName()}</div>`;
    stationHTML += '</div>';

    $('#stations').append(stationHTML);
  });
}
updateDOM();
$('#nextStationBtn').click(() => {
  tram.drive();
  updateDOM();
});


$('#reset').click(() => {
  tram.reset();
  updateDOM();
});
