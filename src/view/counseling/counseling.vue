<template>
    <div>
        <div class="contents-wrap">

            <info-box />

            <section class="biolet-box">
                <div class="biolet-box--msg">
                    이소율님<br>첫 상담이시네요
                </div>
                <img src="@/assets/img/img_hat.png" class="biolet-box--img" alt="학사모">
                <div class="biolet-box--txt">
                    HAY박사와 함께<br>안성맞춤 상담사 찾아보세요
                </div>
            </section>

            <section class="soft-biolet-box">
                <div class="soft-biolet-box--txt">
                    <span>박사와 함께<br> 안성맞춤 상담사 찾기</span>
                </div>
                <a href="" class="soft-biolet-box--btn"></a>
            </section>

            <now-counseling class="now-counseling-mb" />

            <rese-counseling />

        </div>
    </div>
</template>

<script>
import InfoBox from '@/components/infoBox.vue';
import NowCounseling from './partial/nowCounseling.vue';
import ReseCounseling from './partial/reseCounseling.vue';

export default {
    components: { 
        InfoBox, 
        NowCounseling,
        ReseCounseling,
    },
    name: 'counseling',
}
</script>