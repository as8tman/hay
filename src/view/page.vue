<template>
    <div>
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <router-view name="viewCounseling" />
                </div>
                <div class="swiper-slide">
                    <router-view name="viewPrescribe" />
                </div>
                <div class="swiper-slide">
                    <router-view name="viewHay" />
                </div>
                <div class="swiper-slide">
                    <router-view name="viewLounge" />
                </div>
                <div class="swiper-slide">
                    <router-view name="viewMy" />
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper, {Pagination} from 'swiper';
import 'swiper/swiper-bundle.min.css';
Swiper.use([Pagination]);

export default {
    name: 'page',
    components: {
    },
    data(){
        return{
            menu: [
                {
                    icon: '@/assets/img/icon.svg',
                    title: '심리상담',
                    url: '/page/counseling',
                },
                {
                    icon: '@/assets/img/icon.svg',
                    title: '로켓처방',
                    url: '/page/prescribe',
                },
                {
                    icon: '@/assets/img/icon.svg',
                    title: 'HAY',
                    url: '/page/hay',
                },
                {
                    icon: '@/assets/img/icon.svg',
                    title: '헤이라운지',
                    url: '/page/lounge',
                },
                {
                    icon: '@/assets/img/icon.svg',
                    title: 'MY공간',
                    url: '/page/my',
                },
            ],
        }
    },
    methods: {
    },
    mounted() {
        let swiper = new Swiper('.swiper', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                // renderBullet: function(index, className){
                //     return '<span class="' + className + '">' + (this.menu[index]) + '</span>';
                // },

                // renderBullet: function (index, className) {
                //     return '<span class="' + className + '">' + (this.menu[index].title) + '</span>';
                // },

            },

            touchReleaseOnEdges: true,

            // Navigation arrows
            //   navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            //   },

            // And if we need scrollbar
            //   scrollbar: {
            //     el: '.swiper-scrollbar',
            //   },
            }
        );

        // function goMenu(val){
        //     // this.$router.push( val );
        //     this.goGo(val)
        // }

        swiper.on('activeIndexChange', () => {
            // this.goMenu(swiper.activeIndex);
            // console.log(menu[swiper.activeIndex].url)
            this.$router.push( this.menu[swiper.activeIndex].url );
            // goMenu(menu[swiper.activeIndex].url)
        });

    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common.scss';
.swiper-slide{
    min-height: 100vh;
}
/deep/ {
    .swiper-pagination{
        display: flex;
        .swiper-pagination-bullet{
            width: 20% !important;
            height: 3rem;
            &::before{
                content: url('~@/assets/img/icon.svg');
            }
            &::after{
                content: '심리상담';
            }
        }
    }
}
// .swiper-pagination {
// 	position: absolute;
// 	top: 10px;
// 	right: 10px;
// 	width: auto !important;
// 	left: auto !important;
// 	margin: 0;
// }
// .swiper-pagination-bullet {
// 	padding: 5px 10px;
// 	border-radius: 0;
// 	width: auto;
// 	height: 30px;
// 	text-align: center;
// 	line-height: 30px;
// 	font-size: 12px;
// 	color:#000;
// 	opacity: 1;
// 	background: rgba(0,0,0,0.2);
// }
// .swiper-pagination-bullet-active {
// 	color:#fff;
// 	background: #007aff;
// }
</style>