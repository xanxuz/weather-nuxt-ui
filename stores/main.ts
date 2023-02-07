interface State {
  selectedCountry: 'Canada' | 'United States' | 'Venezuela'
  weather: Weather | null,
}

interface Weather {
  main: WeatherMain,
  weather: WeatherWeather[],
  wind: WeatherWind
  clouds: WeatherClouds
}

interface WeatherMain {
  feels_like: number,
  temp: number,
  humidity: number
}

interface WeatherWeather {
  description: string,
  icon: string
}

interface WeatherWind {
  speed: number
}

interface WeatherClouds {
  all: number
}

export const useMainStore = defineStore('main', {
  state: (): State => ({
    selectedCountry: 'United States',
    weather: null,
  }),
  getters: {
    feelsLikeDegrees () : (number) {
      const degrees = this.weather?.main.feels_like ?? 0
      return Math.round(degrees)
    },
    temperatureDegrees () : (number) {
      const degrees = this.weather?.main.temp ?? 0
      return Math.round(degrees)
    },
    weatherDescription () : (string | undefined) {
      return this.weather?.weather[ 0 ].description
    },
    weatherIcon ():(string | undefined) {
      return this.weather?.weather[ 0 ].icon
    },
    windSpeed ():(number | undefined) {
      return this.weather?.wind.speed
    },
    humidityPercentage ():(string | undefined) {
      return `${this.weather?.main.humidity}%`
    },
    cloudsPercentage ():(string | undefined) {
      return `${this.weather?.clouds.all}%`
    },
  },
  actions: {
    async getWeatherInfo () : Promise<void> {
      const { data } : any = await useFetch('/api/currentWeather', {
        params : {
          locationName: this.selectedCountry
        }
      })

      this.weather = data.value
    }
  },
})
