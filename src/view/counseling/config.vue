<template>
    <div>
        <div class="config">
            <img src="@/assets/img/temp_config.png" class="config--top" alt="">
            <section class="therapy">
                <div class="box-head-set">
                    <h2 class="box-head-set--tit">따끈한 신상 테라피</h2>
                    <button class="box-head-set--more"></button>
                </div>
                <div class="swiper swiper-bg-set">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" @click="selectBg(1)" :class="{active: selectWho === 1}">
                            <img src="@/assets/img/temp_bg1.jpg" class="swiper-bg-set--img" alt="">
                            <div class="swiper-heelingtem--txt">블러셔</div>
                        </div>
                        <div class="swiper-slide" @click="selectBg(2)" :class="{active: selectWho === 2}">
                            <img src="@/assets/img/temp_bg2.jpg" class="swiper-bg-set--img" alt="">
                            <div class="swiper-heelingtem--txt">모자이크</div>
                        </div>
                        <div class="swiper-slide" @click="selectBg(3)" :class="{active: selectWho === 3}">
                            <img src="@/assets/img/temp_bg3.jpg" class="swiper-bg-set--img" alt="">
                            <div class="swiper-heelingtem--txt">모자이크</div>
                        </div>
                        <div class="swiper-slide" @click="selectBg(4)" :class="{active: selectWho === 4}">
                            <img src="@/assets/img/temp_bg4.jpg" class="swiper-bg-set--img" alt="">
                            <div class="swiper-heelingtem--txt">모자이크</div>
                        </div>
                        <div class="swiper-slide" @click="selectBg(5)" :class="{active: selectWho === 5}">
                            <img src="@/assets/img/temp_bg1.jpg" class="swiper-bg-set--img" alt="">
                            <div class="swiper-heelingtem--txt">블러셔</div>
                        </div>
                        <div class="swiper-slide" @click="selectBg(6)" :class="{active: selectWho === 6}">
                            <img src="@/assets/img/temp_bg2.jpg" class="swiper-bg-set--img" alt="">
                            <div class="swiper-heelingtem--txt">모자이크</div>
                        </div>
                        <div class="swiper-slide" @click="selectBg(7)" :class="{active: selectWho === 7}">
                            <img src="@/assets/img/temp_bg3.jpg" class="swiper-bg-set--img" alt="">
                            <div class="swiper-heelingtem--txt">모자이크</div>
                        </div>
                        <div class="swiper-slide" @click="selectBg(8)" :class="{active: selectWho === 8}">
                            <img src="@/assets/img/temp_bg4.jpg" class="swiper-bg-set--img" alt="">
                            <div class="swiper-heelingtem--txt">모자이크</div>
                        </div>
                    </div>
                </div>
            </section>
            <img src="@/assets/img/temp_config2.png" class="config--mid" alt="">
        </div>
        <img src="@/assets/img/temp_btn.svg" class="config--mid" alt="">
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
export default {
    name: 'Config',
    data(){
        return{
            selectWho: 1,
        }
    },
    methods: {
        selectBg(val){
            this.selectWho = val;
        }
    },
    mounted() {
        let swiper = new Swiper('.swiper-bg-set', {
            slidesPerView: 'auto',
            spaceBetween: 12,
        });
        console.log(swiper);
    },
}
</script>