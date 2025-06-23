<template>
  <div class="modal fade" id="confirmationModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ titleText }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>{{ bodyText }}</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const emit = defineEmits(['confirmed'])

defineProps({
  titleText: {
    type: String,
    default: 'Заголовок'
  },
  bodyText: {
    type: String,
    required: true
  },
})

onMounted(() => {
  const modalEl = document.getElementById('confirmationModal')
  modalEl.addEventListener('hidden.bs.modal', () => {
    emit('confirmed')
  })
})
</script>

<style scoped>
.modal-content {
  border-radius: 10px;
}
</style>