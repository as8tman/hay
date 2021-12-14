<template>
    <div>
        <div class="contents-wrap">

            <info-box />

            <section class="white-box-contents2">
                
                <counseler-profile />

                <evaluation class="evaluation-margin" />

            </section>

            <section class="white-box-contents">

                

            </section>
            
        </div>
    </div>
</template>

<script>
import InfoBox from '@/components/infoBox.vue';
import CounselerProfile from './partial/counselerProfile.vue';
import Evaluation from './partial/evaluation.vue';

export default {
    name: 'counseling',
    components: { 
        InfoBox,
        CounselerProfile,
        Evaluation,
    },
}
</script>