// Write your JavaScript code here!

window.addEventListener('load', function () {
  window.addEventListener('submit', function (event) {
    let pilotName = this.document.getElementById('pilotName');
    let copilotName = this.document.getElementById('copilotName');
    let fuelLevel = this.document.getElementById('fuelLevel');
    let cargoMass = this.document.getElementById('cargoMass');
    let list = this.document.getElementById('faultyItems');
    let missionTarget = this.document.getElementById('missionTarget')
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
     let listedPlanetsResponse = myFetch();
     listedPlanetsResponse.then(function (json) {
          listedPlanets = json.json()

         listedPlanets.then(
             function(planet){
                 let i =Math.floor(Math.random()*planet.length)
                 planet = planet[i]
                 missionTarget.innerHTML = `                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${planet.name} </li>
                    <li>Diameter: ${planet.diameter} </li>
                    <li>Star: ${planet.star}</li>
                    <li>Distance from Earth: ${planet.distance} </li>
                    <li>Number of Moons: ${planet.moons} </li>
                </ol>
                <img src="${planet.image}">`;
             }
             
             )
     })

});
