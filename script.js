// Write your JavaScript code here!

// const { myFetch } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

// const { addDestinationInfo } = require('./scriptHelper');

window.addEventListener('load', function () {
  let list = document.getElementById('faultyItems');
  list.style.visibility = 'hidden';
  //failin a hidden test
  window.addEventListener('submit', function (event) {
    let pilotName = this.document.getElementById('pilotName');
    let copilotName = this.document.getElementById('copilotName');
    let fuelLevel = this.document.getElementById('fuelLevel');
    let cargoMass = this.document.getElementById('cargoMass');
    let list = this.document.getElementById('faultyItems');
    let missionTarget = this.document.getElementById('missionTarget');
    // list.style.visibility = 'visible'
    formSubmission(
      this.document,
      list,
      pilotName.value,
      copilotName.value,
      fuelLevel.value,
      cargoMass.value
    );

    event.preventDefault();
  });
  let listedPlanets;
  let listedPlanetsResponse =  myFetch();
  console.log(listedPlanetsResponse,'listedPlanetsResponse')
  listedPlanetsResponse.then(json =>{
    listedPlanets = json;
          let planet = pickPlanet(listedPlanets);

    console.log(listedPlanets);
    addDestinationInfo(
      document,
      planet.name,
      planet.diameter,
      planet.star,
      planet.distance,
      planet.moons,
      planet.image
    );
  })
//   listedPlanetsResponse.then(function (json) {
//     listedPlanets = json.json();

//     listedPlanets.then(function (planets) {
//       let planet = pickPlanet(planets);
//       addDestinationInfo(
//         document,
//         planet.name,
//         planet.diameter,
//         planet.star,
//         planet.distance,
//         planet.moons,
//         planet.image
//       );
//     });
//   });
});
