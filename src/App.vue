<template>
  <div id="app">
    <router-view />
    <!-- <div class="home">
        <img @click="$router.push('/page')" src="@/assets/img/temp.png" class="gate" alt="">
    </div> -->
    <!-- <router-view name="viewCounseling" />
    <router-view name="viewPrescribe" />
    <router-view name="viewHay" />
    <router-view name="viewLounge" />
    <router-view name="viewMy" /> -->
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import '@/assets/scss/common.scss';
</style>