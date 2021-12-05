<template>
    <div>
        <div class="contents-wrap">

            <section class="info-box">
                <div class="info-box--who">
                    <img src="@/assets/img/temp_selfi.jpg" alt="프로필 사진" class="info-box--selfi">
                    <span class="info-box--name">
                        이소율
                    </span>
                </div>
                <div class="info-box--stat">
                    <span class="info-box--notice">
                        <img src="@/assets/img/ico_notice.svg" alt="알림">
                    </span>
                    <span class="info-box--txt">
                        정기권 이용중
                    </span>
                </div>
            </section>

            <section class="biolet-box">
                <div class="biolet-box--msg">
                    오늘 <span class="txt-biolet">하루</span>는 <br> 어떠셨나요?
                </div>
                <img src="@/assets/img/imoti_1.svg" class="biolet-box--img" alt="캐릭터">
                <button class="biolet-box--btn btn-txt-go" type="button">하루 기록하기</button>
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
                                    <img :src="item.face" class="list-smileHeart--face" :alt="item.faceAlt">
                                    <span class="list-smileHeart--digit">{{item.date}}</span>
                                </div>
                                <img :src="item.heart" class="list-smileHeart--heart" :alt="item.heartAlt">
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
export default {
    name: 'hay',
    data(){
        return{
            imotiFace: [
                {smileUrl: '@/assets/img/imoti_face_smile.svg', smileAlt: '웃음'},
                {depressUrl: '@/assets/img/imoti_face_depress.svg', depressAlt: '우울함'},
            ],
            heart: [
                {trueUrl: '@/assets/img/ico_heart.svg', tureAlt: '하트'},
                {falseUrl: '@/assets/img/ico_heart_red.svg', falseAlt: '빈하트'},
            ],
            diary: [
                {face: this.imotiFace.smileUrl, faceAlt: this.imotiFace.smileAlt, date: 21, heart: this.heart.falseUrl, heartAlt: this.heart.trueAlt, msg: '오늘은 즐거운 일이 가득했다.'},
                {face: this.imotiFace.depressUrl, faceAlt: this.imotiFace.depressAlt, date: 22, heart: this.heart.trueUrl, heartAlt: this.heart.trueAlt, msg: '오늘은 감기에 걸려서 집에만 있었다. 열이 많이 올라서 약을 먹고 잠들었더니 하루가 다 지나가서 속상했다. 내일 시험을 잘 볼 수 있는지 걱정이다 ㅠㅠ'},
            ]
        }
    }
}
</script>