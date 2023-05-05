import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TestComp from './components/TestComp.vue'
import HelloWorld from './components/HelloWorld.vue'
import UserProfile from './components/UserProfile.vue'
import AdminPage from './components/AdminPage.vue'

const router = createRouter({
    routes: [
          {
            path: '/',
            component: TestComp
          },
          {
            path: '/home',
            component: HelloWorld
          },
          {
            path: '/user',
            component: UserProfile
          },
          {
            path: '/admin',
            component: AdminPage
          }
      ],
      history: createWebHistory()
  })
  
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
