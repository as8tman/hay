<template>
    <div>
        <div class="contents-wrap">
            <info-box />
            <section class="white-box-contents2 counseler-stararea">
                <counseler-profile />
                <evaluation class="evaluation-margin" />
            </section>
            <section class="white-box-contents counseler-stararea">
                <b-tabs class="tab-style counseler-txt" content-class="mt-5" fill>
                    <b-tab title="상담 정보" active>
                        <h3 class="tit-style">상담사 경력</h3>
                        <ul class="list-disc-txt">
                            <li class="list-disc-txt--li">전문 상담사 2급 (한국상담협회)</li>
                            <li class="list-disc-txt--li">청소년상담학 석사 졸업</li>
                            <li class="list-disc-txt--li">청소년 전문상담 경력 10년 </li>
                            <li class="list-disc-txt--li">세종시 교육청 소속 WE상담 경력 3년</li>
                        </ul>
                        <h3 class="tit-style counseler-information">상담사 소개</h3>
                        <h4 class="tit-style2 counseler-information2">시작하는 이야기</h4>
                        <p class="txt-style">
                            안녕하세요. 상담사 김새싹입니다. <br>
                            작은 고민도 큰 슬픔도 가장 힘이 나는 위로가
                            되기 위해 많은 분들의 목소리를 경청하고
                            있습니다.
                        </p>
                        <h4 class="tit-style2 counseler-information2">특히 이 분야 상담에 자신 있어요.</h4>
                        <p class="txt-style">
                            청소년 친구들의 관계 갈등부터 소통방법에
                            대한 다양한 고민을 들…
                        </p>
                        <button type="button" class="btn-more counseler-information">더보기</button>
                        <h3 class="tit-style counseler-information3">상담센터 정보</h3>
                        <img src="@/assets/img/temp_map.jpg" alt="지도" class="map">
                        <h4 class="tit-style2 counseler-information2">마음 든든 상담센터</h4>
                        <p class="txt-style">
                            서울특별시 강남구 테헤란로81길 13
                        </p>
                        <div>
                            <button class="btn-tell counseler-tell" type="button">전화걸기</button>
                            <button class="btn-share" type="button">공유하기</button>
                        </div>
                    </b-tab>
                    <b-tab title="후기(137건)"><p>I'm the second tab</p></b-tab>
                    <b-tab title="Q&amp;A"><p>I'm the tab with the very, very long title</p></b-tab>
                </b-tabs>
            </section>
            <section class="btn-group">
                <img src="~@/assets/img/ico_heart_box.svg" class="btn-group--zzim" alt="찜">
                <button @click="$router.push('/page/reservation')" class="btn-group--wide">상담 예약하기</button>
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
//     activated() {
//     window.scrollTo(0, 0);
//   },
    mounted() {
    //     setTimeout(() => {
    //         document.scrollTo(0, 0);
    //         window.scrollTo(0, 0);
    //     }, 100);
    //     document.body.scrollTop = document.documentElement.scrollTop = 0;
    // window.scrollTo(0, 0)
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/Reservation.scss';
.reserve-btn {
  width: 26.6rem;
  height: 4.5rem;
  border: none;
  border-radius: 1rem;
  font-size: 16px;
  font-weight: 500;
}
.pur-btn {
  background: #7F64BA !important;
  color: #fff !important;
}
</style>