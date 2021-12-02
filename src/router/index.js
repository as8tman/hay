import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/view/home.vue';
import Page from '@/view/page.vue';
import Counseling from '@/view/counseling/counseling.vue';
import Prescribe from '@/view/prescribe/prescribe.vue';
import Hay from '@/view/hay/hay.vue';
import Lounge from '@/view/lounge/lounge.vue';
import My from '@/view/my/my.vue';
// import test from '@/view/counseling/test.vue';
// import ttt from '@/view/counseling/ttt.vue';

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/page',
        component: Page,
        children: [
            {
                path: 'counseling',
                components: {
                    viewCounseling: Counseling,
                }
            },
            {
                path: 'prescribe',
                components: {
                    viewPrescribe: Prescribe,
                }
            },
            {
                path: 'hay',
                components: {
                    viewHay: Hay,
                }
            },
            {
                path: 'lounge',
                components: {
                    viewLounge: Lounge,
                }
            },
            {
                path: 'my',
                components: {
                    viewMy: My,
                }
            },
        ],
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});
  
export default router;