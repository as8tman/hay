<template>
    <section class="heelingtem">
        <div class="box-head-set">
            <h2 class="box-head-set--tit">주목! 잘나가는 힐링템</h2>
            <button class="box-head-set--more"></button>
        </div>
        <div class="swiper swiper-heelingtem">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_heelingTem1.jpg" class="swiper-heelingtem--img" alt="무드 에센스 차분한 라벤더">
                    <div class="swiper-heelingtem--txt">무드 에센스 차분한 라벤더</div>
                    <div class="swiper-heelingtem--num">
                        <span class="swiper-heelingtem--percent">30%</span>
                        <span class="swiper-heelingtem--price">26,500<span class="swiper-heelingtem--won">원</span></span>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_heelingTem2.jpg" class="swiper-heelingtem--img" alt="숙면 아로마 오일">
                    <div class="swiper-heelingtem--txt">숙면 아로마 오일</div>
                    <div class="swiper-heelingtem--num">
                        <span class="swiper-heelingtem--percent">20%</span>
                        <span class="swiper-heelingtem--price">46,500<span class="swiper-heelingtem--won">원</span></span>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_heelingTem3.jpg" class="swiper-heelingtem--img" alt="마약쫀득 쿠션">
                    <div class="swiper-heelingtem--txt">마약쫀득 쿠션</div>
                    <div class="swiper-heelingtem--num">
                        <span class="swiper-heelingtem--percent">38%</span>
                        <span class="swiper-heelingtem--price">21,500<span class="swiper-heelingtem--won">원</span></span>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_heelingTem4.jpg" class="swiper-heelingtem--img" alt="행복가득 코">
                    <div class="swiper-heelingtem--txt">행복가득 코</div>
                    <div class="swiper-heelingtem--num">
                        <span class="swiper-heelingtem--percent">60%</span>
                        <span class="swiper-heelingtem--price">16,500<span class="swiper-heelingtem--won">원</span></span>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_heelingTem1.jpg" class="swiper-heelingtem--img" alt="무드 에센스 차분한 라벤더">
                    <div class="swiper-heelingtem--txt">무드 에센스 차분한 라벤더</div>
                    <div class="swiper-heelingtem--num">
                        <span class="swiper-heelingtem--percent">30%</span>
                        <span class="swiper-heelingtem--price">26,500<span class="swiper-heelingtem--won">원</span></span>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_heelingTem2.jpg" class="swiper-heelingtem--img" alt="숙면 아로마 오일">
                    <div class="swiper-heelingtem--txt">숙면 아로마 오일</div>
                    <div class="swiper-heelingtem--num">
                        <span class="swiper-heelingtem--percent">20%</span>
                        <span class="swiper-heelingtem--price">46,500<span class="swiper-heelingtem--won">원</span></span>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_heelingTem3.jpg" class="swiper-heelingtem--img" alt="마약쫀득 쿠션">
                    <div class="swiper-heelingtem--txt">마약쫀득 쿠션</div>
                    <div class="swiper-heelingtem--num">
                        <span class="swiper-heelingtem--percent">38%</span>
                        <span class="swiper-heelingtem--price">21,500<span class="swiper-heelingtem--won">원</span></span>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/temp_heelingTem4.jpg" class="swiper-heelingtem--img" alt="행복가득 코">
                    <div class="swiper-heelingtem--txt">행복가득 코</div>
                    <div class="swiper-heelingtem--num">
                        <span class="swiper-heelingtem--percent">60%</span>
                        <span class="swiper-heelingtem--price">16,500<span class="swiper-heelingtem--won">원</span></span>
                    </div>
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
    name: 'HeelingTem',
    mounted() {
        let swiper = new Swiper('.swiper-heelingtem', {
            slidesPerView: 'auto',
            spaceBetween: 12,
            autoplay: {
                delay: 1000,
            },
        });
        console.log(swiper);
    },
}
</script>