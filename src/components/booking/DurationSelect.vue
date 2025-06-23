<template>
  <div class="mb-3">
    <label for="duration" class="form-label">Продолжительность</label>
    <select
      id="duration"
      class="form-select"
      v-model="modelDuration"
      required
    >
      <option disabled selected>Выберите продолжительность</option>
      <option v-for="duration in durations" :key="duration" :value="duration">
        {{ duration }}
      </option>
    </select>
  </div>
</template>

<script setup>
const modelDuration = defineModel()
const durations = ['30 мин', '1 час', '1.5 часа', '2 часа', '3 часа']
</script>