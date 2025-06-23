import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useBookingStore = defineStore('booking', () => {
  const office = ref('')
  const meetingRoom = ref('')
  const date = ref('')
  const startTime = ref('')
  const duration = ref('')

  function setBookingDetails(payload) {
    office.value = payload.office
    meetingRoom.value = payload.meetingRoom
    date.value = payload.date
    startTime.value = payload.startTime
    duration.value = payload.duration
  }

  function clearBooking() {
    office.value = ''
    meetingRoom.value = ''
    date.value = ''
    startTime.value = ''
    duration.value = ''
  }

  const bookingDetails = computed(() => ({
    office: office.value,
    meetingRoom: meetingRoom.value,
    date: date.value,
    startTime: startTime.value,
    duration: duration.value
  }))

  return {
    office,
    meetingRoom,
    date,
    startTime,
    duration,
    
    setBookingDetails,
    clearBooking,
    
    bookingDetails
  }
})