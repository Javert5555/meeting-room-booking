<template>
  <div class="mb-3">
    <label for="date" class="form-label">Дата</label>
    <input
      type="date"
      id="date"
      class="form-control"
      v-model="modelDate"
      required
    >
  </div>
</template>

<script setup>
const modelDate = defineModel()
</script>