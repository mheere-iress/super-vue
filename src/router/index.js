import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';

Vue.use(VueRouter);

const reqAuth = { requiresAuth: true };

const routes = [
  { path: '/', name: "home", component: Home },
  { path: '/login', name: "login", component: Login },
  { path: '/dashboard', name: "dashboard", component: Dashboard, meta: reqAuth },
  { path: '*', redirect: "dashboard" } //,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
