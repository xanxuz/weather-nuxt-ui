<template>
  <div>
    Feels like
    <strong class="text-grey-darken-2 font-weight-medium">
      {{ feelsLikeDegrees }}°
    </strong>
  </div>
</template>

<script setup lang="ts">
  const { feelsLikeDegrees } = storeToRefs(useMainStore())
</script>
