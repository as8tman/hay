<template>
    <div class="swiper swiper-ban">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="@/assets/img/temp_ban.jpg" class="swiper-ban--img" alt="배너">
            </div>
            <div class="swiper-slide">
                <img src="@/assets/img/temp_ban2.jpg" class="swiper-ban--img" alt="배너">
            </div>
        </div>
        <div class="swiper-ban--paging"></div>
    </div>
</template>

<script>
import Swiper, {Pagination} from 'swiper';
import 'swiper/swiper-bundle.min.css';
Swiper.use([Pagination]);

export default {
    name: 'Ban',
    mounted() {
        let swiper = new Swiper('.swiper-ban', {
            pagination: {
                el: '.swiper-ban--paging',
                clickable: true,
            },
        });
        console.log(swiper);
    },
}
</script>