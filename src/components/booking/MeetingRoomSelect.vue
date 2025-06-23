<template>
  <div class="mb-3">
    <label for="meetingRoom" class="form-label">Переговорная</label>
    <select
      id="meetingRoom"
      class="form-select"
      v-model="modelMeetingRoom"
      :disabled="!office"
      required
    >
      <option disabled selected>Выберите переговорную</option>
      <option v-for="room in filteredMeetingRooms" :key="room" :value="room">
        {{ room }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  office: {
    type: String,
    required: true
  }
})

const modelMeetingRoom = defineModel()

const meetingRooms = {
  'Омск': ['Комната 1', 'Комната 2', 'Комната 3'],
  'Москва': ['Зал A', 'Зал B', 'Зал C', 'Зал D'],
  'Санкт-Петербург': ['Север', 'Юг', 'Восток', 'Запад']
}

const filteredMeetingRooms = computed(() => {
  return props.office ? meetingRooms[props.office] : []
})
</script>