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
                    HAY박사와 함께 안성맞춤 상담사 찾기
                </div>
                <a href="" class="soft-biolet-box--btn"></a>
            </section>

            <section class="white-box">
                <div class="navi-leftRight">
                    <button class="navi-leftRight--prev" type="button">이전</button>
                    <span class="navi-leftRight--txt">2021.12</span>
                    <button class="navi-leftRight--next" type="button">이후</button>
                </div>
                <div class="list-smileHeart">
                    <ul>
                        <li v-for="item in diary" :key="item.date" class="list-smileHeart--li">
                            <div class="list-smileHeart--ico">
                                <div class="list-smileHeart--date">
                                    <img :src="require('@/assets/img/' + imotiFace[item.face].url)" class="list-smileHeart--face" :alt="imotiFace[item.faceAlt].alt">
                                    <span class="list-smileHeart--digit">{{item.date}}</span>
                                </div>
                                <img :src="require('@/assets/img/' + heart[item.heart].url)" class="list-smileHeart--heart" :alt="heart[item.heartAlt].alt">
                            </div>
                            <span class="list-smileHeart--msg">
                                {{item.msg}}
                            </span>
                        </li>
                    </ul>
                </div>
            </section>

        </div>
    </div>
</template>

<script>
import infoBox from '@/components/infoBox.vue'
export default {
  components: { infoBox },
    name: 'counseling',
}
</script>