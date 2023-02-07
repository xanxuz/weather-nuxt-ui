<template>
  <v-app
    class="d-flex flex-column align-center fill-height font-weight-light"
    :class="temperatureInterpretation + '-bg-gradient'"
  >
    <WeatherCard class="my-auto">
      <CountrySelector />

      <WeatherImaginaryTemperature class="mt-6" />

      <WeatherTemperature class="mt-8" />

      <div class="mt-10 text-capitalize">
        {{ weatherDescription }}
      </div>

      <v-divider class="mt-8" />

      <WeatherDetails class="mt-4" />
    </WeatherCard>
  </v-app>
</template>

<script setup lang="ts">
  import WeatherDetails from '~/components/WeatherDetails.vue'
  import WeatherTemperature from '~/components/WeatherTemperature.vue'
  import WeatherCard from '~/components/WeatherCard.vue'

  // Init weather store
  useAsyncData('weather', async () => {
    const mainStore = useMainStore()
    await mainStore.getWeatherInfo()
  })

  const { weatherDescription, temperatureDegrees } = storeToRefs(useMainStore())

  const temperatureInterpretation = computed(() => (temperatureDegrees.value < 24) ? 'cold' : 'warm')
</script>

<style scoped>
  .cold-bg-gradient {
    background: linear-gradient(180deg, #4b6cb7 0%, #182848 100%);
  }

  .warm-bg-gradient {
    background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  }
</style>
