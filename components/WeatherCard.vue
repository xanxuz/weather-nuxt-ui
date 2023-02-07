<template>
  <v-card
    class="bg-grey-lighten-3 text-center px-6 py-8"
    rounded="xl"
    width="320"
    variant="elevated"
    elevation="20"
  >
    <slot />
  </v-card>
</template>

<script>
  export default {
    name: 'WeatherCard'
  }
</script>
