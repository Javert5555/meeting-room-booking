<template>
  <div class="mb-3">
    <label for="startTime" class="form-label">Время начала</label>
    <select
      id="startTime"
      class="form-select"
      v-model="modelStartTime"
      required
    >
      <option disabled selected>Выберите время</option>
      <option v-for="time in timeSlots" :key="time" :value="time">
        {{ time }}
      </option>
    </select>
  </div>
</template>

<script setup>
const modelStartTime = defineModel()
const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
</script>