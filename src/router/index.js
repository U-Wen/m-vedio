import { createRouter, createWebHistory } from 'vue-router'

const Home = () =>
  import ('@/views/home/Home.vue')
const Channels = () =>
  import ('@/views/channels/Channels.vue')
const Dynamic = () =>
  import ('@/views/dynamic/Dynamic.vue')
const Vip = () =>
  import ('@/views/vip/Vip.vue')
const Profile = () =>
  import ('@/views/profile/Profile.vue')

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/channels',
    component: Channels
  },
  {
    path: '/dynamic',
    component: Dynamic
  },
  {
    path: '/vip',
    component: Vip
  },
  {
    path: '/profile',
    component: Profile
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router