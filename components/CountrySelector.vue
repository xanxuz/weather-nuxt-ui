<template>
  <client-only>
    <v-select
      v-model="selectedCountry"
      color="grey-lighten-2"
      variant="outlined"
      class="text-grey-darken-3 test"
      hide-details
      :items="['Canada', 'United States', 'Venezuela']"
    />
  </client-only>
</template>

<script setup lang="ts">
  const mainStore = useMainStore()
  const { selectedCountry } = storeToRefs(mainStore)

  watch(selectedCountry, () => {
    mainStore.getWeatherInfo()
  })
</script>
