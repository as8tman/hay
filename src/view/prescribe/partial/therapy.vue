<template>
    <section class="therapy">
        <div class="box-head-set">
            <h2 class="box-head-set--tit">따끈한 신상 테라피</h2>
            <button class="box-head-set--more"></button>
        </div>
        <div class="swiper swiper-heelingtem">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_therapy1.jpg" class="swiper-heelingtem--img" alt="지친 허리를 위한 빈야사 요가">
                    <div class="swiper-heelingtem--txt">지친 허리를 위한 빈야사 요가</div>
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_therapy2.jpg" class="swiper-heelingtem--img" alt="감각과 자극의 재즈 테라피">
                    <div class="swiper-heelingtem--txt">감각과 자극의 재즈 테라피</div>
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_therapy3.jpg" class="swiper-heelingtem--img" alt="10분 든든 스트레칭 요가">
                    <div class="swiper-heelingtem--txt">10분 든든 스트레칭 요가</div>
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_therapy4.jpg" class="swiper-heelingtem--img" alt="감정 박스-증오비우는 법">
                    <div class="swiper-heelingtem--txt">감정 박스-증오비우는 법</div>
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_therapy1.jpg" class="swiper-heelingtem--img" alt="지친 허리를 위한 빈야사 요가">
                    <div class="swiper-heelingtem--txt">지친 허리를 위한 빈야사 요가</div>
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_therapy2.jpg" class="swiper-heelingtem--img" alt="감각과 자극의 재즈 테라피">
                    <div class="swiper-heelingtem--txt">감각과 자극의 재즈 테라피</div>
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_therapy3.jpg" class="swiper-heelingtem--img" alt="10분 든든 스트레칭 요가">
                    <div class="swiper-heelingtem--txt">10분 든든 스트레칭 요가</div>
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_therapy4.jpg" class="swiper-heelingtem--img" alt="감정 박스-증오비우는 법">
                    <div class="swiper-heelingtem--txt">감정 박스-증오비우는 법</div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
export default {
    name: 'Therapy',
    mounted() {
        let swiper = new Swiper('.swiper-heelingtem', {
            slidesPerView: 'auto',
            spaceBetween: 12,
        });
        console.log(swiper);
    },
}
</script>