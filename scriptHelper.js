// Write your helper functions here!

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
  // Here is the HTML formatting for our mission target div.
  /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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
  copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
  let launchStatus = this.document.getElementById('launchStatus');
  if (fuelLevel < 10000 || cargoMass > 10000) {
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
    launchStatus.style.color = 'rgb(199, 37, 78)';
    if (fuelLevel < 10000) {
      fuelStatus.innerHTML = 'Fuel level too low for launch';
    }
    if (cargoLevel > 10000) {
      cargoStatus.innerHTML = 'Cargo mass too high for launch';
    }
  } else {
    launchStatus.innerHTML = 'Shuttle is Ready for Launch';
    launchStatus.style.color = 'rgb(65, 159, 106)';
  }
  list.style.visibility = 'visible';

}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

try {
  module.exports.addDestinationInfo = addDestinationInfo;
  module.exports.validateInput = validateInput;
  module.exports.formSubmission = formSubmission;
  module.exports.pickPlanet = pickPlanet;
  module.exports.myFetch = myFetch;
} catch (error) {}
