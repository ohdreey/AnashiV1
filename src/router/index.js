import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Vetements from '../views/Vetements.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/vetements', component: Vetements },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
