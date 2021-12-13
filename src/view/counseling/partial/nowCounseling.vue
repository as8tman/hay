<template>
    <section class="white-box-contents">
        <h2 class="box-tit">지금바로 상담</h2>
        <div class="swiper swiper-counseler">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_face.jpg" class="counseler--selfi" alt="힐링교사">
                    <span class="counseler--txt">힐링교사</span>
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_face.jpg" class="counseler--selfi" alt="힐링교사">
                    <span class="counseler--txt">힐링교사</span>
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_face.jpg" class="counseler--selfi" alt="힐링교사">
                    <span class="counseler--txt">힐링교사</span>
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_face.jpg" class="counseler--selfi" alt="힐링교사">
                    <span class="counseler--txt">힐링교사</span>
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_face.jpg" class="counseler--selfi" alt="힐링교사">
                    <span class="counseler--txt">힐링교사</span>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <button class="btn_box_more"><span>더보기</span></button>
    </section>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

export default {
    name: 'NowCounseling',
    mounted() {
        let swiper = new Swiper('.swiper-counseler', {
            slidesPerView: 'auto',
            spaceBetween: 20,
        });
        console.log(swiper);
    },
}
</script>