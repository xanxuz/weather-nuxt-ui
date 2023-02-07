<template>
  <div
    class="d-flex justify-center align-center mx-auto bg-white rounded-pill
      d-inline-block elevation-10 text-h2 font-weight-medium"
    style="width: 150px; height: 150px; position: relative"
  >
    <v-img
      v-if="weatherIcon"
      class="position-absolute weather-icon"
      :src="`https://openweathermap.org/img/wn/${weatherIcon}.png`"
    />

    {{ temperatureDegrees }}°
  </div>
</template>

<script setup lang="ts">
  const { temperatureDegrees, weatherIcon } = storeToRefs(useMainStore())
</script>

<style scoped>
  .weather-icon {
    height: 110px;
    width: 110px;
    top: -35px;
    left: -35px;
    background-size: 100%;
    /*filter: drop-shadow(-34px -19px 10px #000);*/
    filter: drop-shadow(-5px -5px 0px rgba(0, 0, 0, 0.5));
  }
</style>
