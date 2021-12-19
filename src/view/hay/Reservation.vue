<template>
    <div>
      <div class="contents-wrap">

        <info-box />

        <section class="white-box">
          <div class="counseling-box box-type">
            <span class="tit-txt">상담유형</span>
            <div class="btn-type">
                <button class="pur-btn coun-btn">AR상담</button>
                <button class="white-btn coun-btn">센터방문</button>
                <button class="white-btn coun-btn">전화상담</button>
            </div>
          </div>
          <div class="date-box box-type">
            <span class="tit-txt">날짜</span>
            <span class="sub-txt">12월 25일(토)</span>
          </div>
          <div class="time-box box-type">
            <span class="tit-txt">시간선택</span>
            <span class="sub-txt">PM 07:30</span>
          </div>
          <div class="reserve-box box-type">
            <span class="tit-txt center-tit">원하시는 시간을 선택해 주세요</span>
            <div class="time-img">
              <img src="~@/assets/img/ico_sun.svg" alt="해">
            </div>
            <div class="btn-group col1">
              <button class="time-btn">10:00</button>
              <button class="time-btn pur-btn">10:30</button>
              <button class="time-btn">11:00</button>
              <button class="time-btn">11:30</button>
            </div>
            <div class="btn-group col2">
              <button class="time-btn margin-right">12:00</button>
              <button class="time-btn">12:30</button>
            </div>
          </div>
    
          <div class="ticket-box box-type accordion" role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1 arrow-up" role="tab">
                <b-button block v-b-toggle.accordion-1 variant="info"><span class="tit-txt">이용권 선택</span></b-button>
              </b-card-header>
              <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <div class="pink-ticket ticket">
                    <div class="white-rec">
                      <b-card-text>
                        <span class="tit">정기상담 체험권</span>
                        <span class="desc">무료로 체험 해볼 수 있습니다.</span>
                        <span class="red-price">FREE</span>
                        <div class="info-txt">
                          <span class="desc">10분 / 1회</span>
                          <span class="desc">2021.12.31까지</span>
                        </div>
                      </b-card-text>
                    </div>
                  </div>
                  <div class="pur-ticket ticket">
                    <div class="white-rec">
                      <b-card-text>
                        <span class="tit">AR상담 1회 이용권</span>
                        <span class="desc">상담사와 진지한 대화를 나눠보세요.</span>
                        <span class="red-price">45,000</span>
                        <span class="desc">50분 / 1회</span>
                      </b-card-text>
                    </div>
                  </div>
                  <div class="pur-ticket ticket">
                    <div class="white-rec">
                      <b-card-text>
                        <span class="tit">AR상담 2회 이용권</span>
                        <span class="desc">상담사와 진지한 대화를 나눠보세요.</span>
                        <span class="red-price">81,000</span><del><span class="sm-price">90,000</span></del>
                        <span class="desc">50분 / 2회</span>
                      </b-card-text>
                    </div>
                  </div>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
          <div class="inquiry-box box-type">
            <span class="tit-txt">문의하기</span>
            <input type="text"
                class="input-inquiry white-input-box"
                placeholder=
                "궁금하신 내용이나 사전에 알아야 할
                주의사항이 있다면 문의를 남겨주세요.
                (500자 이내)">
          </div>
        </section>

        <section class="btn-content">
          <img src="~@/assets/img/ico_heart_box.svg" alt="찜">
          <button @click="$router.push('/page/payment')" class="pur-btn reserve-btn">상담 예약하기</button>
        </section>
      </div>
    </div>
</template>

<script>
import infoBox from '@/components/infoBox.vue'
export default {
  components: { infoBox },
  name: 'Reservation',
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/Reservation.scss';
</style>