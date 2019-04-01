const ui = new UI;
const storage = new Storage;

const weatherLocation = storage.getLocationData();
const weather = new Weather(`${weatherLocation.city}`, `${weatherLocation.country}`);


document.addEventListener("DOMContentLoaded", getWeather());


// location change

document.getElementById("w-change-btn").addEventListener('click', (e) => {
  city = document.getElementById("city").value;
  country = document.getElementById("country").value;
  weather.changeLocation(city, country);
  storage.setLocationData(city, country);
  getWeather();
  $("#locModal").modal("hide");

});


function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}