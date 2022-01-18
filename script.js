// Write your JavaScript code here!

window.addEventListener('load', function () {
  let list = document.getElementById('faultyItems');
  list.style.visibility = 'hidden';



  window.addEventListener('submit', function (event) {
    let pilotName = this.document.getElementById('pilotName');
    let copilotName = this.document.getElementById('copilotName');
    let fuelLevel = this.document.getElementById('fuelLevel');
    let cargoMass = this.document.getElementById('cargoMass');
    let list = this.document.getElementById('faultyItems');
    let missionTarget = this.document.getElementById('missionTarget');

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
  listedPlanetsResponse.then(json =>{
    listedPlanets = json;
          let planet = pickPlanet(listedPlanets);

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
});
