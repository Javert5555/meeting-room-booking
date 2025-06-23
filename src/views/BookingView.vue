<template>
  <div class="booking-form">
    <h2 class="mb-4">Бронирование переговорной</h2>
    <form @submit.prevent="handleSubmit">
      <OfficeSelect v-model="form.office" />
      <MeetingRoomSelect v-model="form.meetingRoom" :office="form.office" />
      <DatePicker v-model="form.date" />
      <TimeSelect v-model="form.startTime" />
      <DurationSelect v-model="form.duration" />

      <button type="submit" class="btn btn-primary">Забронировать</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBookingStore } from '@/stores/booking'

import OfficeSelect from '@/components/booking/OfficeSelect.vue'
import MeetingRoomSelect from '@/components/booking/MeetingRoomSelect.vue'
import DatePicker from '@/components/booking/DatePicker.vue'
import TimeSelect from '@/components/booking/TimeSelect.vue'
import DurationSelect from '@/components/booking/DurationSelect.vue'

const router = useRouter()
const bookingStore = useBookingStore()

const form = ref({
  office: '',
  meetingRoom: '',
  date: '',
  startTime: '',
  duration: ''
})

const handleSubmit = () => {
  bookingStore.setBookingDetails(form.value)
  router.push({ name: 'confirmation' })
}
</script>

<style scoped>
.booking-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px #0000001a;
}
</style>