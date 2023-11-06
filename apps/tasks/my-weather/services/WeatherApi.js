import qs from 'qs'

export default class WeatherApi {
  constructor() {
    this.api = 'https://api.openweathermap.org/data/2.5/weather'
  }

  getWeatherByCity(cityName) {
    const data = qs.stringify({
      appId: 'a01a1e568f90d84f8734a5629fcddc41',
      q: cityName,
      units: 'metric'
    })

    const url = `${this.api}?${data}`
    
    return fetch(url)
  }
}