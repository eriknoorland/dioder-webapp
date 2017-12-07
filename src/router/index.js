import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import favorites from '@/components/favorites';
import Options from '@/components/Options';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: favorites,
    },
    {
      path: '/options',
      name: 'Options',
      component: Options,
    },
  ],
});
