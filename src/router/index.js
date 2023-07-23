import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ConfigureHome from '@/components/ConfigureHome.vue'
import ConfigureAddress from '@/components/ConfigureAddress.vue'
import ConfigurePayment from '@/components/ConfigurePayment.vue'
import ConfigureAppointment from '@/components/ConfigureAppointment.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView,
    children: [
      { path: '/', name: 'ConfigureHome', component: ConfigureHome },
      { path: '/address', name: 'ConfigureAddress', component: ConfigureAddress },
      { path: '/payment', name: 'ConfigurePayment', component: ConfigurePayment },
      { path: '/book-appointment', name: 'ConfigureAppointment', component: ConfigureAppointment }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
