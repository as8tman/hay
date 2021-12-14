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

let varCounseling = Counseling;
let varPrescribe = Prescribe;
let varHay = Hay;
let varLounge = Lounge;
let varMy = My;

console.log(varCounseling, 'aaaaaaa')

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
                path: 'counseler',
                components: {
                    viewCounseling: varCounseling = Counseler,
                    viewPrescribe: varPrescribe,
                    viewHay: varHay,
                    viewLounge: varLounge,
                    viewMy: varMy,
                }
            },
            {
                path: 'counseling',
                components: {
                    viewCounseling: varCounseling = Counseling,
                    viewPrescribe: varPrescribe,
                    viewHay: varHay,
                    viewLounge: varLounge,
                    viewMy: varMy,
                }
            },
            
            {
                path: 'prescribe',
                components: {
                    viewCounseling: varCounseling,
                    viewPrescribe: varPrescribe = Prescribe,
                    viewHay: varHay,
                    viewLounge: varLounge,
                    viewMy: varMy,
                }
            },
            {
                path: 'hay',
                components: {
                    viewCounseling: varCounseling = Counseling,
                    viewPrescribe: varPrescribe = Prescribe,
                    viewHay: varHay = Hay,
                    viewLounge: varLounge = Lounge,
                    viewMy: varMy = My,
                },
                // children: [
                //     {
                //         path: 'counseler',
                //         // component: Counseler,
                //         name: 'Counseler',
                //         components: {
                //             viewCounseling: Counseler,
                //         }
                //     }
                // ],
            },
            {
                path: 'postDiary01',
                components: {
                    viewCounseling: varCounseling,
                    viewPrescribe: varPrescribe,
                    viewHay: varHay = PostDiary01,
                    viewLounge: varLounge,
                    viewMy: varMy,
                }
            },
            {
                path: 'postDiary01',
                components: {
                    viewCounseling: varCounseling,
                    viewPrescribe: varPrescribe,
                    viewHay: varHay = PostDiary01,
                    viewLounge: varLounge,
                    viewMy: varMy,
                }
            },
            {
                path: 'postDiary02',
                components: {
                    viewCounseling: Counseling,
                    viewPrescribe: Prescribe,
                    viewHay: varHay = PostDiary02,
                    viewLounge: Lounge,
                    viewMy: My,
                }
            },
            {
                path: 'postDiary03',
                components: {
                    viewCounseling: Counseling,
                    viewPrescribe: Prescribe,
                    viewHay: varHay = PostDiary03,
                    viewLounge: Lounge,
                    viewMy: My,
                }
            },
            {
                path: 'reservation',
                components: {
                    viewCounseling: Counseling,
                    viewPrescribe: Prescribe,
                    viewHay: varHay = Reservation,
                    viewLounge: Lounge,
                    viewMy: My,
                }
            },
            {
                path: 'lounge',
                components: {
                    viewCounseling: varCounseling,
                    viewPrescribe: varPrescribe,
                    viewHay: varHay,
                    viewLounge: varLounge = Lounge,
                    viewMy: varMy,
                }
            },
            {
                path: 'my',
                components: {
                    viewCounseling: varCounseling,
                    viewPrescribe: varPrescribe,
                    viewHay: varHay,
                    viewLounge: varLounge,
                    viewMy: varMy = My,
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