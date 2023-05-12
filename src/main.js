import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import UserAuth from './components/user/UserAuth.vue'
import UserProfile from './components/user/UserProfile.vue'
import AdminPage from './components/admin/AdminPage.vue'
import UserDashboard from './components/admin/UserDashboard.vue'
import OrderDashboard from './components/admin/OrdersDashboard.vue'
import DriverDashboard from './components/admin/DriverDashboard.vue'

const router = createRouter({
    routes: [
          {
            path: '/user-auth',
            component: UserAuth
          },
          {
            path: '/user',
            component: UserProfile
          },
          {
            path: '/',
            component: AdminPage
          },
          {
            path: '/admin/userdashboard',
            component: UserDashboard
          },
          {
            path: '/admin/orderdashboard',
            component: OrderDashboard
          },
          {
            path: '/admin/driverdashboard',
            component: DriverDashboard
          }
      ],
      history: createWebHistory()
  })
  
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
