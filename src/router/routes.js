export default [
  {
    path: '/',
    name: 'booking',
    component: () => import('@/views/BookingView.vue')
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: () => import('@/views/ConfirmationView.vue')
  }
]