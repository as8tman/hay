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
  .process-box {
    margin: 5.5rem 0;
    display: flex;
    justify-content: center;
    .cir-pur {
      position: relative;
      width: 2.3rem;
      height: 2.3rem;
      margin-right: 4.5rem;
      border-radius: 2.3rem;
      background: #6A4AAF;
      box-shadow: .2rem .2rem .4rem #999;
      &::after{
        content: '';
        position: absolute;
        top: 1.1rem;
        margin-left: 2.35rem;
        width: 4.5rem;
        height: .2rem;
        background: #fff
      }
    };
    .cir-white {
      position: relative;
      width: 2.3rem;
      height: 2.3rem;
      margin-right: 4.5rem;
      border-radius: 2.3rem;
      background: #fff;
      &:nth-child(2){
        &::after{
          content: '';
          position: absolute;
          top: 1.1rem;
          margin-left: 2.35rem;
          width: 4.5rem;
          height: .2rem;
          background: #fff
        }
      }
      &:last-child{
        margin-right: 0;
      }
    };
    .txt-white {
      display: block;
      color:#fff;
      text-align: center;
      line-height: 2.3rem;
      font-weight: 700;
    };
    .txt-gray {
      display: block;
      color:#999;
      text-align: center;
      line-height: 2.3rem;
      font-weight: 700;
    };
  }
  .mood-box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    .mood-txt {
      margin-bottom: 5.5rem;
      font: 16px normal;
      text-align: center;
      .txt-violet {
        color: #AF4AA8;
        font-weight: bold;
      }
    }
    .white-box{
      background: #fff;
      border-radius: 1.5rem;
      padding: 2rem;
      .emoti-wrap {
        ul {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: space-between;
          li {
            padding: 2rem;
            &:nth-child(1),
            &:nth-child(5),
            &:nth-child(9) {
              padding-left: 0;
            }
            &:nth-child(4),
            &:nth-child(8),
            &:nth-child(12) {
              padding-right: 0;
            }
            .emoti-desc {
              display: flex;
              justify-content: center;
            }
          }
        }
      }
    } 
  }
</style>