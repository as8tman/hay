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
                path: 'reservation',
                components: {
                    viewCounseling: varCounseling = Reservation,
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
                    viewCounseling: varCounseling,
                    viewPrescribe: varPrescribe,
                    viewHay: varHay = Hay,
                    viewLounge: varLounge,
                    viewMy: varMy,
                },
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
                    viewCounseling: varCounseling,
                    viewPrescribe: varPrescribe,
                    viewHay: varHay = PostDiary02,
                    viewLounge: varLounge,
                    viewMy: varMy,
                }
            },
            {
                path: 'postDiary03',
                components: {
                    viewCounseling: varCounseling,
                    viewPrescribe: varPrescribe,
                    viewHay: varHay = PostDiary03,
                    viewLounge: varLounge,
                    viewMy: varMy,
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
    // scrollBehavior() {
    //     return new Promise((resolve, reject) => {
    //         console.log(reject)
    //       setTimeout(() => {
    //         resolve({ x: 0, y: 0 })
    //       }, 100)
    //     })
    //   },
    routes,
//     hashbag: true,
// scrollBehavior (to, from, savedPosition) {
//     if (savedPosition) {
//         return savedPosition
//     } else {
//         return { x: 0, y: 0 }
//     }
// },
    // scrollBehavior () {
    //     document.body.scrollTop = 0; // For Safari
    //     document.documentElement.scrollTop = 0;
    //   },
    // scrollBehavior(to, from, savedPosition) {
    //     if (savedPosition) {
    //       return savedPosition
    //     } else {
    //       const isHash = to.hash ? to.hash.split('#') : undefined
    //       if (isHash) {
    //         let tmp = setTimeout(() => {
    //           document.getElementById(isHash[1]).scrollIntoView()
    //           clearTimeout(tmp)
    //         })
    //       }
    //       return null
    //     }
    //   },
    // scrollBehavior: (to, from, savedPosition) => {
    //     console.log(to, from, savedPosition)
    //     // very bad, maybe better use a Navigation Guard?
    //     document.getElementById('app').scrollIntoView();
    //     return null;
    // }
    // scrollBehavior: (to, from, savedPosition) => {
    //     // This is the workaround
    //     if (to.name === 'products' && from.name === 'products') {
    //       return savedPosition || { x: 0, y: 0 };
    //     }
    
    //     if (to.name.startsWith('products') && from.name.startsWith('products')) {
    //       return null;
    //     }
    
    //     return savedPosition || { x: 0, y: 0 };
    //   },
    // scrollBehavior(to, from, savedPosition) {
    //     return new Promise(resolve => this.app.$once('scrollAfterEnter', () => {
    //         if (savedPosition) {
    //             return resolve(savedPosition);
    //         }

    //         return resolve({ x: 0, y: 0 });
    //     }));
    // },
    // scrollBehavior (to, from, savedPosition) {
    //     console.log(from, savedPosition)
    //     if (to.hash) {
    //       return {
    //         // x, y as top-level variables define position not offset
    //         selector: to.hash,
    //         // offset has to be set as an extra object
    //         offset: { x: 0, y: 64 }
    //       }
    //     }
    //   }
    // scrollBehavior (to, from, savedPosition) {
    //     console.log(from, savedPosition)
    //     if (to.hash) {
    //       return {
    //         selector: to.hash
    //         // , offset: { x: 0, y: 10 }
    //       }
    //     }
    //   }
    // scrollBehavior(to, from, SavedPosition) {
    //     if (to.hash) {
    //       const el = window.location.href.split("#")[1];
    //       if (el.length) {
    //         document.getElementById(el).scrollIntoView({ behavior: "smooth" });
    //       }
    //     } else if (SavedPosition) {
    //       return SavedPosition;
    //     } else {
    //       document.getElementById("app").scrollIntoView({ behavior: "smooth" });
    //     }
    //   },
    // scrollBehavior: (to, from, savedPosition) => {
    //     if (to.hash) {
    //       Vue.nextTick(() => {
    //         document.getElementById(to.hash.substring(1)).scrollIntoView();
    //       })
    //       //Does not work but it's the vue way
    //       return {selector: to.hash}
    //     }
    
    //     if (savedPosition) {
    //       //Did not test this but maybe it also does not work
    //       return savedPosition
    //     }
    
    //     document.getElementById('app').scrollIntoView();
    //     //Does not work but it's the vue way
    //     return {x: 0, y: 0}
    //   }
    // scrollBehavior (to, from, savedPosition) { return { x: 0, y: 0 } }

    // scrollBehavior() {
    //     document.getElementById('app').scrollIntoView();
    // }
    // scrollBehavior: (to, from, savedPosition) => {
    //     if (savedPosition) {
    //       return savedPosition;
    //     } else if (to.hash) {
    //       return {
    //         selector: to.hash
    //       };
    //     } else {
    //       return { x: 0, y: 0 };
    //     }
    //   }
});
// var clientY = 0
// router.beforeEach((next) => {
//   clientY = window.scrollY
//   next()
// })

// router.afterEach(() => {
//   window.scrollTo(0,clientY)
// })
// router.afterEach((to, from) => {
//     console.log(to, from)
//     let bodySrcollTop = document.body.scrollTop
//     if (bodySrcollTop !== 0) {
//       document.body.scrollTop = 0
//       return
//     }
//     let docSrcollTop = document.documentElement.scrollTop
//     if (docSrcollTop !== 0) {
//       document.documentElement.scrollTop = 0
//     }
//   })
// router.beforeEach((to, from, next) => {
//     document.body.scrollTop = 0;
//     next()
//     });
// router.afterEach((to, from) => {
//     console.log(to, from)
//     document.getElementById('app').scrollIntoView()
//   })
// router.beforeEach(function (to, from, next) { 
//     setTimeout(() => {
//         window.scrollTo(0, 0);
//     }, 100);
//     next();
// });
// router.beforeEach((to, from, next) => {
//     console.log(to, from, next)
//     window.scrollTo(0, 0)
//   })
  
export default router;