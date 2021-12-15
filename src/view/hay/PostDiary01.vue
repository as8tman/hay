<template>
  <div>
    <div class="contents-wrap">
      <div class="process-box">
        <div class="cir-pur">
          <span class="txt-white">1</span>
        </div>
        <div class="cir-white">
          <span class="txt-gray">2</span>
        </div>
        <div class="cir-white">
          <span class="txt-gray">3</span>
        </div>
      </div>
      <div class="mood-box">
        <div class="mood-txt">
          오늘은 어떤 <span class="txt-violet">감정</span>을 느꼈나요?
        </div>
        <div class="white-box">
          <div class="emoti-wrap">
            <ul>
              <li v-for="item in itemList" :key="item.id">
                <img :src="require('@/assets/img/' + item.url)">
                <div class="emoti-desc">{{item.alt}}</div>
              </li>
            </ul>
          </div>
        </div>
        <button @click="$router.push('/page/postDiary02')" class="btn-group--wide full">다음</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'postDiary01',
    data() {
      return {
        itemList: [
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
          {url: 'imoti_face_smile.svg', alt: '웃음'}, /* 0 */
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/PostDiary.scss';
</style>