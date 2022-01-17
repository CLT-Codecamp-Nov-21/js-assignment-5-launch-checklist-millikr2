// Write your JavaScript code here!

window.addEventListener('load', function () {
  window.addEventListener('submit', function (event) {
    let pilotName = this.document.getElementById('pilotName');
    let copilotName = this.document.getElementById('copilotName');
    let fuelLevel = this.document.getElementById('fuelLevel');
    let cargoMass = this.document.getElementById('cargoMass');
    let list = this.document.getElementById('faultyItems');
    list.style.visibility = 'visible'
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

  //    let listedPlanets;
  //    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  //    let listedPlanetsResponse;
  //    listedPlanetsResponse.then(function (result) {
  //        listedPlanets = result;
  //        console.log(listedPlanets);
  //    }).then(function () {
  //        console.log(listedPlanets);
  //        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
  //    })
});
