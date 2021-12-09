<template>
    <div>
        <div class="contents-wrap">

            <info-box />

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
    name: 'hay',
    data(){
        return{
            imotiFace: [
                {url: 'imoti_face_smile.svg', alt: '웃음'}, /* 0 */
                {url: 'imoti_face_joy.svg', alt: '기쁨'}, /* 1 */
                {url: 'imoti_face_angry.svg', alt: '화남'}, /* 2 */
                {url: 'imoti_face_tension.svg', alt: '긴장'}, /* 3 */
                {url: 'imoti_face_happy.svg', alt: '행복'}, /* 4 */
                {url: 'imoti_face_depress.svg', alt: '우울'}, /* 5 */
                {url: 'imoti_face_bore.svg', alt: '지루함'}, /* 6 */
                {url: 'imoti_face_absurd.svg', alt: '황당'}, /* 7 */
                {url: 'imoti_face_sad.svg', alt: '슬픔'}, /* 8 */
                {url: 'imoti_face_anxious.svg', alt: '불안'}, /* 9 */
                {url: 'imoti_face_tire.svg', alt: '피곤함'}, /* 10 */
                {url: 'imoti_face_sick.svg', alt: '아픔'}, /* 11 */
            ],
            heart: [
                {url: 'ico_heart.svg', alt: '빈하트'}, /* 0 */
                {url: 'ico_heart_red.svg', alt: '하트'}, /* 1 */
            ],
            diary: [
                {date: 1, face: 0, faceAlt: 0, heart: 0, heartAlt: 0, msg: '오늘은 즐거운 일이 가득했다'},
                {date: 2, face: 1, faceAlt: 1, heart: 1, heartAlt: 1, msg: '비와서 꿀꿀'},
                {date: 3, face: 2, faceAlt: 2, heart: 0, heartAlt: 0, msg: '오늘은 즐거운 일이 가득했다'},
                {date: 4, face: 3, faceAlt: 3, heart: 1, heartAlt: 1, msg: '비와서 꿀꿀'},
                {date: 5, face: 4, faceAlt: 4, heart: 0, heartAlt: 0, msg: '오늘은 즐거운 일이 가득했다'},
                {date: 6, face: 5, faceAlt: 5, heart: 1, heartAlt: 1, msg: '비와서 꿀꿀'},
                {date: 7, face: 6, faceAlt: 6, heart: 0, heartAlt: 0, msg: '오늘은 즐거운 일이 가득했다'},
                {date: 8, face: 7, faceAlt: 7, heart: 1, heartAlt: 1, msg: '비와서 꿀꿀'},
                {date: 9, face: 8, faceAlt: 8, heart: 0, heartAlt: 0, msg: '오늘은 즐거운 일이 가득했다'},
                {date: 10, face: 9, faceAlt: 9, heart: 1, heartAlt: 1, msg: '비와서 꿀꿀'},
                {date: 11, face: 10, faceAlt: 10, heart: 0, heartAlt: 0, msg: '오늘은 즐거운 일이 가득했다'},
                {date: 12, face: 11, faceAlt: 11, heart: 1, heartAlt: 1, msg: '비와서 꿀꿀'},
            ]
        }
    },
}
</script>