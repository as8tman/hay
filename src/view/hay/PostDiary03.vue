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
        <div class="cir-pur">
          <span class="txt-white">3</span>
        </div>
      </div>
      <div class="mood-box">
        <div class="mood-txt">
          오늘의 <span class="txt-violet">일기 쓰기</span>
        </div>
      </div>
      <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1 arrow-up" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info" class="bold-txt">무슨 생각이 들었나요?</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <input type="text" placeholder="내용을 입력해 주세요." class="white-input-box">
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1 border-tab" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">어떤 감정이 들었나요?</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <input type="text" placeholder="내용을 입력해 주세요." class="white-input-box">
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">어떤 행동을 했나요?</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <input type="text" placeholder="내용을 입력해 주세요." class="white-input-box">
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
  <section class="btn-group">
          <button @click="$router.push('/page/postDiary02')" class="btn-group--wide gray half">이전</button>
          <button class="btn-group--wide half">기록</button>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'postDiary03',
    data() {
      return {
      }
    },
  }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/PostDiary.scss';
</style>