import { createRouter, createWebHistory } from 'vue-router';
import ArticlesIndex from '../components/articles/index.vue';
import ArticlesNew from '../components/articles/new.vue';

const routes = [
  { path: '/articles', component: ArticlesIndex },
  { path: '/articles/new', component: ArticlesNew },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;