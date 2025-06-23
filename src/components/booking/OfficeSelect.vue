<template>
  <div class="mb-3">
    <label for="office" class="form-label">Офис</label>
    <select
      id="office"
      class="form-select"
      v-model="modelOffice"
      required
    >
      <option disabled selected>Выберите офис</option>
      <option v-for="office in offices" :key="office" :value="office">
        {{ office }}
      </option>
    </select>
  </div>
</template>

<script setup>
const modelOffice = defineModel()
const offices = ['Омск', 'Москва', 'Санкт-Петербург']
</script>