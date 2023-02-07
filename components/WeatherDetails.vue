<template>
  <v-row>
    <v-col
      v-for="detail in weatherDetails"
      :key="detail.value"
      class="d-flex justify-center"
    >
      <v-icon
        class="mr-1"
        color="grey-darken-1"
      >
        {{ detail.icon }}
      </v-icon>
      {{ detail.value }}
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  const { windSpeed, humidityPercentage, cloudsPercentage } = storeToRefs(useMainStore())

  const weatherDetails = computed(() => [
    {
      icon: 'mdi-weather-windy',
      value: windSpeed.value
    },
    {
      icon: 'mdi-water-outline',
      value: humidityPercentage.value
    },
    {
      icon: 'mdi-weather-cloudy',
      value: cloudsPercentage.value
    },
  ])
</script>
