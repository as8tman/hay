<template>
    <div class="page">
        <div class="header">
            <img @click="$router.push('/')" src="@/assets/img/logo_simple.svg" alt="hay">
        </div>
        <div class="swiper swiper-contents">
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
                    url: '/page/counseling',
                },
                {
                    url: '/page/prescribe',
                },
                {
                    url: '/page/hay',
                },
                {
                    url: '/page/lounge',
                },
                {
                    url: '/page/my',
                },
            ],
        }
    },
    methods: {
        },
    mounted() {
        // let bodyHeight = calc(100% - 48);
        let swiper = new Swiper('.swiper-contents', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            touchReleaseOnEdges: true,
            slidesPerView: 1,
            // autoHeight: true,
            // height: bodyHeight,
            initialSlide: 2,
        });
        swiper.on('activeIndexChange', () => {
            this.$router.push( this.menu[swiper.activeIndex].url );
        });
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';
@import '@/assets/scss/page.scss';
</style>