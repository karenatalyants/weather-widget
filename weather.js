class Weather {
  constructor(city, country) {
    this.api_key = "8ebde6ec3257800da7328463c8a7734a";
    this.city = city;
    this.country = country;
  }

  // fetch weather from api

  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&APPID=${this.api_key}`)
    const responseData = await response.json();
    console.log(responseData);

    return responseData;
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }

}