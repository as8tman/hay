<template>
    <section class="white-box-contents">
        <h2 class="box-tit">예약상담</h2>
        
        <counseler-profile />

        <div class="swiper tag">
            <div class="swiper-wrapper">
                <span class="swiper-slide tag--unit">
                    #힐링교사
                </span>
                <span class="swiper-slide tag--unit">
                    #연애
                </span>
                <span class="swiper-slide tag--unit">
                    #가족관계
                </span>
                <span class="swiper-slide tag--unit">
                    #고민하지마
                </span>
                <span class="swiper-slide tag--unit">
                    #힐링교사
                </span>
                <span class="swiper-slide tag--unit">
                    #연애
                </span>
                <span class="swiper-slide tag--unit">
                    #가족관계
                </span>
                <span class="swiper-slide tag--unit">
                    #고민하지마
                </span>
            </div>
        </div>
        <button class="btn_box_more"><span>관리</span></button>
    </section>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import CounselerProfile from './counselerProfile.vue';

export default {
    name: 'ReseCounseling',
    components: {
        CounselerProfile,
    },
    mounted()
        {
        let swiper = new Swiper('.tag', {
            slidesPerView: 'auto',
            slidesPerGroup: 1,
            spaceBetween: 8,
        });
        console.log(swiper);
    }
}
</script>