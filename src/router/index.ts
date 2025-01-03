import { createRouter, createWebHistory } from 'vue-router';
import ArticlesPage from '../pages/ArticlesPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import ArticlePage from '../pages/ArticlePage.vue';

const routes = [
  { path: '/', component: ArticlesPage },
  { path: '/login', component: LoginPage },
  { path: '/articles/:slug', component: ArticlePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
