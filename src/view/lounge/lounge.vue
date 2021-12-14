<template>
    <div>
        <div class="contents-wrap lounge-top">
            <info-box />
            <section class="biolet-box position-relative">
                <div class="lounge-txt">
                    <div class="lounge-txt--1">HAY몰</div>
                    <div class="lounge-txt--2">MY스타일</div>
                </div>
                <img src="@/assets/img/imoti_1.svg" class="biolet-box--img" alt="캐릭터">
                <button class="lounge-txt--btn btn-big" type="button">라운지 만들기</button>
            </section>
        </div>
        <section>
            <div class="tag-set">
                <h2 class="tag-set--tit">추천 키워드</h2>
                <ul class="tag-set--ul">
                    <li class="tag-set--li">#노래</li>
                    <li class="tag-set--li">#고민</li>
                    <li class="tag-set--li">#오디션</li>
                    <li class="tag-set--li">#우정</li>
                </ul>
            </div>
        </section>
        <section>
            <div class="box-white">
                <div class="box-head-set no-margin">
                    <h2 class="box-head-set--tit">오픈라운지</h2>
                </div>
                <ul>
                    <li class="list-hori-img--li">
                        <img src="@/assets/img/temp_openlounge1.jpg" class="list-hori-img--img" alt="">
                        <div class="list-hori-img--txt">
                            <h2 class="list-hori-img--tit">10년생 들어와!</h2>
                            <div class="list-hori-img--tag">
                                <span class="list-hori-img--tagtxt">#노래</span>
                                <span class="list-hori-img--tagtxt">#고민</span>
                                <span class="list-hori-img--tagtxt">#수다방</span>
                            </div>
                            <div class="list-hori-img--num">
                                <span>3</span>/
                                <span class="list-hori-img--people">10</span>
                            </div>
                        </div>
                    </li>
                    <li class="list-hori-img--li">
                        <img src="@/assets/img/temp_openlounge2.jpg" class="list-hori-img--img" alt="">
                        <div class="list-hori-img--txt">
                            <h2 class="list-hori-img--tit">고민상담해줄 사람</h2>
                            <div class="list-hori-img--tag">
                                <span class="list-hori-img--tagtxt">#노래</span>
                                <span class="list-hori-img--tagtxt">#고민</span>
                                <span class="list-hori-img--tagtxt">#수다방</span>
                            </div>
                            <div class="list-hori-img--num">
                                <span>3</span>/
                                <span class="list-hori-img--people">10</span>
                            </div>
                        </div>
                    </li>
                    <li class="list-hori-img--li">
                        <img src="@/assets/img/temp_openlounge3.jpg" class="list-hori-img--img" alt="">
                        <div class="list-hori-img--txt">
                            <h2 class="list-hori-img--tit">쇼미더헤이 (오디션)</h2>
                            <div class="list-hori-img--tag">
                                <span class="list-hori-img--tagtxt">#노래</span>
                                <span class="list-hori-img--tagtxt">#고민</span>
                                <span class="list-hori-img--tagtxt">#수다방</span>
                            </div>
                            <div class="list-hori-img--num">
                                <span>3</span>/
                                <span class="list-hori-img--people">10</span>
                            </div>
                        </div>
                    </li>
                    <li class="list-hori-img--li">
                        <img src="@/assets/img/temp_openlounge4.jpg" class="list-hori-img--img" alt="">
                        <div class="list-hori-img--txt">
                            <h2 class="list-hori-img--tit">있잖아요! 비밀얘기</h2>
                            <div class="list-hori-img--tag">
                                <span class="list-hori-img--tagtxt">#노래</span>
                                <span class="list-hori-img--tagtxt">#고민</span>
                                <span class="list-hori-img--tagtxt">#수다방</span>
                            </div>
                            <div class="list-hori-img--num">
                                <span>3</span>/
                                <span class="list-hori-img--people">10</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
import infoBox from '@/components/infoBox.vue'
export default {
    name: 'Lounge',
    components: { 
        infoBox,
    },
}
</script>