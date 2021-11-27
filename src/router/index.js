import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '@/view/home.vue';
import page from '@/view/page.vue';

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
    },
    {
        path: '/page',
        name: 'page',
        component: page,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});
  
export default router;