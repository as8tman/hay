<template>
    <div class="prescribe">

        <ban />

        <section>
            <div class="prescribe-menu">
                <a href="" class="prescribe-menu--item">
                    <img src="@/assets/img/img_haykit.jpg" class="prescribe-menu--img" alt="헤이키트"><br>
                    헤이키트
                </a>
                <a href="" class="prescribe-menu--item">
                    <img src="@/assets/img/img_terapi.jpg" class="prescribe-menu--img" alt="테라피"><br>
                    테라피
                </a>
                <a href="" class="prescribe-menu--item">
                    <img src="@/assets/img/img_heelingspot.jpg" class="prescribe-menu--img" alt="힐링명소"><br>
                    힐링명소
                </a>
                <a href="" class="prescribe-menu--item">
                    <img src="@/assets/img/img_mentalcheck.jpg" class="prescribe-menu--img" alt="심리검사"><br>
                    심리검사
                </a>
                <a href="" class="prescribe-menu--item">
                    <img src="@/assets/img/img_haymall.jpg" class="prescribe-menu--img" alt="헤이몰"><br>
                    헤이몰
                </a>
            </div>
        </section>

        <heeling-tem />

        <therapy />

        <section>
            <div>
                <div class="box-head-set">
                    <h2 class="box-head-set--tit">이번 주 힐링 명소!</h2>
                    <span class="box-head-set--txt">감성충전 - 이색 체험카페</span>
                </div>
            </div>
            <ul class="img-list">
                <li class="img-list--li">
                    <img src="@/assets/img/temp_spot1.jpg" class="img-list--img" alt="친구들과 함꼐 보드게임 한 판">
                    <div class="img-list--tit">친구들과 함꼐 보드게임 한 판</div>
                </li>
                <li class="img-list--li">
                    <img src="@/assets/img/temp_spot2.jpg" class="img-list--img" alt="ASMR 체험 카페가 있다?!">
                    <div class="img-list--tit">ASMR 체험 카페가 있다?!</div>
                </li>
                <li class="img-list--li">
                    <img src="@/assets/img/temp_spot3.jpg" class="img-list--img" alt="땅콩 라떼 맛집!">
                    <div class="img-list--tit">땅콩 라떼 맛집!</div>
                </li>
                <li class="img-list--li">
                    <img src="@/assets/img/temp_spot4.jpg" class="img-list--img" alt="HAY! 카페 오픈일기">
                    <div class="img-list--tit">HAY! 카페 오픈일기</div>
                </li>
            </ul>
        </section>

        <section>
            <div>
                <div class="box-head-set">
                    <h2 class="box-head-set--tit">Dr. 메이데이의 궁금 매거진</h2>
                </div>
            </div>
            <ul class="img-list">
                <li class="img-list--li">
                    <img src="@/assets/img/temp_megejin1.jpg" class="img-list--img" alt="나만 늘 지는 기분이 드는 이유">
                    <div class="img-list--tit">나만 늘 지는 기분이 드는 이유</div>
                </li>
                <li class="img-list--li">
                    <img src="@/assets/img/temp_megejin2.jpg" class="img-list--img" alt="자유롭게 해줘!">
                    <div class="img-list--tit">자유롭게 해줘!</div>
                </li>
            </ul>
        </section>

    </div>
</template>

<script>
import ban from './partial/ban.vue';
import HeelingTem from './partial/heelingTem.vue';
import Therapy from './partial/therapy.vue';

export default {
    name: 'prescribe',
    components: { 
        ban,
        HeelingTem,
        Therapy,
    },
}
</script>