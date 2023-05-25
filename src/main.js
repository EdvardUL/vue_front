import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import UserAuth from "./components/user/UserAuth.vue";
import UserRegister from "./components/user/UserRegister.vue";
import UserProfile from "./components/user/UserProfile.vue";
import AdminAuth from "./components/admin/AdminAuth.vue";
import AdminProfile from "./components/admin/AdminProfile.vue";
import UserDashboard from "./components/admin/UserDashboard.vue";
import OrderDashboard from "./components/admin/OrdersDashboard.vue";
import DriverDashboard from "./components/admin/DriverDashboard.vue";
import UserOrders from "./components/user/UserOrders.vue";
import OrderTaxi from "./components/user/UserCreateOrder.vue";
import DriverAuth from "./components/driver/DriverAuth.vue";
import DriverProfile from "./components/driver/DriverProfile.vue";
import DriverRegister from "./components/driver/DriverRegister.vue";

const router = createRouter({
  routes: [
    {
      path: "/user-register",
      component: UserRegister,
    },
    {
      path: "/user-auth",
      component: UserAuth,
    },
    {
      path: "/user",
      component: UserProfile,
    },
    {
      path: "/",
      component: AdminAuth,
    },
    {
      path: "/admin-profile",
      component: AdminProfile,
    },
    {
      path: "/order-taxi",
      component: OrderTaxi,
    },
    {
      path: "/user-orders",
      component: UserOrders,
    },
    {
      path: "/driver-auth",
      component: DriverAuth,
    },
    {
      path: "/driver-reg",
      component: DriverRegister,
    },
    {
      path: "/driver",
      component: DriverProfile,
    },
    {
      path: "/user-dashboard",
      component: UserDashboard,
    },
    {
      path: "/order-dashboard",
      component: OrderDashboard,
    },
    {
      path: "/driver-dashboard",
      component: DriverDashboard,
    },
  ],
  history: createWebHistory(),
});

const app = createApp(App);
app.use(router);
app.mount("#app");
