import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import UserAuth from './components/user/UserAuth.vue'
import UserRegister from './components/user/UserRegister.vue'
import UserProfile from './components/user/UserProfile.vue'
import AdminAuth from './components/admin/AdminAuth.vue'
import UserDashboard from './components/admin/UserDashboard.vue'
import OrderDashboard from './components/admin/OrdersDashboard.vue'
import DriverDashboard from './components/admin/DriverDashboard.vue'
import UserOrders from './components/user/UserOrders.vue'
import OrderTaxi from './components/user/UserCreateOrder.vue'

const router = createRouter({
    routes: [
          {
            path: '/user-register',
            component: UserRegister
          },
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
            component: AdminAuth
          },
          {
            path: '/order-taxi',
            component: OrderTaxi
          },
          {
            path: '/user-orders',
            component:UserOrders
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
