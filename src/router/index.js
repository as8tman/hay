import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/view/home.vue';
import Page from '@/view/page.vue';
import Counseling from '@/view/counseling/counseling.vue';
import Counseler from '@/view/counseling/counseler.vue';
import Prescribe from '@/view/prescribe/prescribe.vue';
import Hay from '@/view/hay/hay.vue';
import PostDiary01 from '@/view/hay/PostDiary01.vue';
import PostDiary02 from '@/view/hay/PostDiary02.vue';
import PostDiary03 from '@/view/hay/PostDiary03.vue';
import Reservation from '@/view/hay/Reservation.vue';
import Lounge from '@/view/lounge/lounge.vue';
import My from '@/view/my/my.vue';

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
                    viewPrescribe: Prescribe,
                    viewHay: Hay,
                    viewLounge: Lounge,
                    viewMy: My,
                }
            },
            {
                path: 'counseler',
                components: {
                    viewCounseling: Counseler,
                    viewPrescribe: Prescribe,
                    viewHay: Hay,
                    viewLounge: Lounge,
                    viewMy: My,
                }
            },
            {
                path: 'prescribe',
                components: {
                    viewCounseling: Counseling,
                    viewPrescribe: Prescribe,
                    viewHay: Hay,
                    viewLounge: Lounge,
                    viewMy: My,
                }
            },
            {
                path: 'hay',
                components: {
                    viewCounseling: Counseling,
                    viewPrescribe: Prescribe,
                    viewHay: Hay,
                    viewLounge: Lounge,
                    viewMy: My,
                }
            },
            {
                path: 'postDiary01',
                components: {
                    viewCounseling: Counseling,
                    viewPrescribe: Prescribe,
                    viewHay: PostDiary01,
                    viewLounge: Lounge,
                    viewMy: My,
                }
            },
            {
                path: 'postDiary02',
                components: {
                    viewCounseling: Counseling,
                    viewPrescribe: Prescribe,
                    viewHay: PostDiary02,
                    viewLounge: Lounge,
                    viewMy: My,
                }
            },
            {
                path: 'postDiary03',
                components: {
                    viewCounseling: Counseling,
                    viewPrescribe: Prescribe,
                    viewHay: PostDiary03,
                    viewLounge: Lounge,
                    viewMy: My,
                }
            },
            {
                path: 'reservation',
                components: {
                    viewCounseling: Counseling,
                    viewPrescribe: Prescribe,
                    viewHay: Reservation,
                    viewLounge: Lounge,
                    viewMy: My,
                }
            },
            {
                path: 'lounge',
                components: {
                    viewCounseling: Counseling,
                    viewPrescribe: Prescribe,
                    viewHay: Hay,
                    viewLounge: Lounge,
                    viewMy: My,
                }
            },
            {
                path: 'my',
                components: {
                    viewCounseling: Counseling,
                    viewPrescribe: Prescribe,
                    viewHay: Hay,
                    viewLounge: Lounge,
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