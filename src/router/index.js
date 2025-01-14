import { createRouter, createWebHistory } from 'vue-router';
import ArticlesIndex from '../components/articles/index.vue';
import ArticlesNew from '../components/articles/new.vue';
import ArticlesShow from '../components/articles/show.vue';
import ArticlesEdit from '../components/articles/edit.vue';


const routes = [
  { path: '/articles', component: ArticlesIndex },
  { path: '/articles/new', component: ArticlesNew },
  { path: '/articles/:id', component: ArticlesShow },
  { path: '/articles/:id/edit', component: ArticlesEdit },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;