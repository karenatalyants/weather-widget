class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.details = document.getElementById("w-details");
    this.main = document.getElementById("w-main");
    this.desc = document.getElementById("w-desc");
    this.temp = document.getElementById("w-temp");
    this.icon = document.getElementById("w-icon");
    this.pressure = document.getElementById("w-pressure");
    this.humidity = document.getElementById("w-humidity");
    this.windSpeed = document.getElementById("w-wind-speed");
  }
  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.main.textContent = weather.weather[0].main;
    this.desc.textContent = weather.weather[0].description;
    this.temp.textContent = `Feels like ${weather.main.temp} °C`;
    this.icon.setAttribute("src", `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.pressure.textContent = `Pressure: ${weather.main.pressure * 0.75} mmHg`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
    this.windSpeed.textContent = `Wind speed: ${weather.wind.speed} m/s`;
  }
}