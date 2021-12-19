<template>
    <div>
        <div class="contents-wrap lounge-top">
            <info-box />
            <section class="biolet-box pre-top">
                <div class="biolet-box--msg">
                    이소율님<br>AR상담 10분전
                </div>
                <img src="@/assets/img/img_hedset.svg" class="biolet-box--img" alt="캐릭터">
                <button @click="$router.push('/page/config')" class="lounge-txt--btn btn-big" type="button">AR상담 입장하기</button>
            </section>
            <now-counseling class="pre-mid" />
            <rese-counseling />
        </div>
    </div>
</template>

<script>
import infoBox from '@/components/infoBox.vue'
import NowCounseling from './partial/nowCounseling.vue'
import ReseCounseling from './partial/reseCounseling.vue'
export default {
    name: 'Pre',
    components: { 
        infoBox,
        NowCounseling,
        ReseCounseling,
    },
}
</script>