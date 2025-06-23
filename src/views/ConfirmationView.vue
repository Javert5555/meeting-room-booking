<template>
  <div class="confirmation">
    <h2 class="mb-4 text-center">Подтверждение бронирования</h2>
    
    <div class="card">
      <div class="card-body">
        <h5 class="card-title border-bottom pb-2">Детали бронирования:</h5>
        
        <div
          class="mb-3"
          v-for="bookingField in bookingFields"
        >
          <strong>{{ bookingField.label }}:</strong> {{ bookingField.value }}
        </div>
        
        <div class="d-flex gap-3">
          <button
            @click="handleNewBooking"
            class="btn btn-primary"
          >
            Создать новое бронирование
          </button>
          <button 
            @click="handleConfirmBooking"
            class="btn btn-success"
          >
            Подтвердить бронирование
          </button>
        </div>
      </div>
    </div>
    <Popup
      :title-text="'Статус бронирования'"
      :body-text="modalBodyText"
      ref="modal"
      @confirmed="handleConfirmBooking"
    />
  </div>
</template>

<script setup>
import { useBookingStore } from '@/stores/booking'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Modal } from 'bootstrap'
import Popup from '@/components/UI/Popup.vue'

const router = useRouter()
const bookingStore = useBookingStore()

const modal = ref(null)
const modalBodyText = ref('Бронирование подтверждено')

const booking = bookingStore.bookingDetails

const bookingFields = computed(() => [
  { label: 'Офис', value: booking.office },
  { label: 'Переговорная', value: booking.meetingRoom },
  { label: 'Дата', value: booking.date },
  { label: 'Время начала', value: booking.startTime },
  { label: 'Продолжительность', value: booking.duration }
])

const showModal = () => {
  const modalInstance = new Modal(modal.value.$el)
  modalInstance.show()
}

const handleNewBooking = () => {
  try {
    bookingStore.clearBooking()
    router.push({ name: 'booking' })
    return true
  } catch (error) {
    return false
  }

}

const handleConfirmBooking = () => {
  const isSuccessBooking = handleNewBooking()

  if (!isSuccessBooking) {
    modalBodyText.value = 'Произошла ошибка при бронировании'
  }

  showModal()
}
</script>

<style scoped>
.confirmation {
  max-width: 600px;
  margin: 0 auto;
}

.card {
  border: none;
  box-shadow: 0 0 10px #0000001a;
}
</style>