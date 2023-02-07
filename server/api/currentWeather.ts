function getUrl (locationName:string) {
  const config = useRuntimeConfig()
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

  return `${baseUrl}?q=${locationName}&units=metric&appid=${config.apiKey}`
}

type Query = {
  locationName?: string
}

export default defineEventHandler(async event => {
  const query : Query = getQuery(event)

  if (!query.locationName) return null

  const url = getUrl(query.locationName)

  return await $fetch(url)
})
