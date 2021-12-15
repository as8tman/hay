<template>
  <div>
    <div class="contents-wrap">
      <div class="process-box">
        <div class="cir-pur">
          <span class="txt-white">1</span>
        </div>
        <div class="cir-pur">
          <span class="txt-white">2</span>
        </div>
        <div class="cir-white">
          <span class="txt-gray">3</span>
        </div>
      </div>
      <div class="mood-box">
        <div class="mood-txt">
          오늘은 어떤 <span class="txt-violet">하루</span>였나요?
        </div>
        <div class="private-box">
          <label class="btn-radio">
            <input type="radio" name="private" id="private"> 비공개
          </label>
        </div>
        <input type="text" placeholder="내용을 입력해 주세요." class="white-input-box">
      </div>
      <section class="btn-group">
          <button @click="$router.push('/page/postDiary01')" class="btn-group--wide gray half">이전</button>
          <button @click="$router.push('/page/postDiary03')" class="btn-group--wide half">다음</button>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'postDiary02',
    data() {
      return {
      }
    },
  }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/PostDiary.scss';
</style>