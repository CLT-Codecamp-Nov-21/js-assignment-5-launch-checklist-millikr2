try {
  require('isomorphic-fetch');
} catch (error) {}

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  let missionTarget = document.getElementById('missionTarget');
  missionTarget.innerHTML = `<h2>MissionDestination</h2>
                <ol>
                    <li>Name:${name}</li>
                    <li>Diameter:${diameter}</li>
                    <li>Star:${star}</li>
                    <li>Distance from Earth:${distance}</li>
                    <li>Number of Moons:${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
}

function validateInput(testInput) {
  if (testInput === '') {
    return 'Empty';
  } else if (isNaN(testInput)) {
    return 'Not a Number';
  } else {
    return 'Is a Number';
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotStatus = document.getElementById('pilotStatus');
  let copilotStatus = document.getElementById('copilotStatus');
  let fuelStatus = document.getElementById('fuelStatus');
  let cargoStatus = document.getElementById('cargoStatus');
  if (
    validateInput(pilot) === 'Empty' ||
    validateInput(copilot) === 'Empty' ||
    validateInput(fuelLevel) === 'Empty' ||
    validateInput(cargoLevel) === 'Empty'
  ) {
    return window.alert('Fields cannot be empty');
  } else if (
    validateInput(fuelLevel) === 'Not a Number' ||
    validateInput(cargoLevel) === 'Not a Number'
  ) {
    return window.alert('Fuel level and cargo level must be numbers');
  }

  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
  copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  let launchStatus = document.getElementById('launchStatus');

  launchStatus.innerHTML = 'Shuttle is Ready for Launch';
  launchStatus.style.color = 'rgb(65, 159, 106)';
  fuelStatus.innerHTML = 'Fuel level high enough for launch';
  cargoStatus.innerHTML = 'Cargo mass low enough for launch';

  if (fuelLevel < 10000 || cargoLevel > 10000) {
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
    launchStatus.style.color = 'rgb(199, 37, 78)';
  }
  if (fuelLevel < 10000) {
    fuelStatus.innerHTML = 'Fuel level too low for launch';
  }
  if (cargoLevel > 10000) {
    cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
  }
  list.style.visibility = 'visible';
}

async function myFetch() {
  try {
    let planetsReturned = await fetch(
      'https://handlers.education.launchcode.org/static/planets.json'
    );
    planetsReturned = await planetsReturned.json();
    return planetsReturned;
  } catch (error) {}
}

function pickPlanet(planets) {
  return planets[Math.floor(Math.random() * planets.length)];
}

try {
  module.exports.addDestinationInfo = addDestinationInfo;
  module.exports.validateInput = validateInput;
  module.exports.formSubmission = formSubmission;
  module.exports.pickPlanet = pickPlanet;
  module.exports.myFetch = myFetch;
} catch (error) {}
