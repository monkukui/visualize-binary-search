import Vue from 'vue';
import VueRouter from 'vue-router';
import SearchAge from '../views/SearchAge.vue';
import LowerBound from '../views/LowerBound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/search-age',
    name: 'search-age',
    component: SearchAge,
  },
  {
    path: '/lower-bound',
    name: 'lower-bound',
    component: LowerBound,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
