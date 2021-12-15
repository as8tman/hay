<template>
    <div class="home">
        <div class="home-wrap">
            <div class="home-logo">
                <img @click="openFullscreen" src="@/assets/img/logo.svg" class="gate" alt="hay">
            </div>
            <div class="home-ico">
                <img src="@/assets/img/ico_1.svg" alt="아이콘">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    methods: {
        openFullscreen() {
            // let elem = document.querySelector("#app");
            // if (elem.requestFullscreen) {
            //     elem.requestFullscreen();
            // } else if (elem.webkitRequestFullscreen) { /* Safari */
            //     elem.webkitRequestFullscreen();
            // } else if (elem.msRequestFullscreen) { /* IE11 */
            //     elem.msRequestFullscreen();
            // }
            this.$router.push('/page/hay');
        },
    },
    activated() {
    window.scrollTo(0, 0);
  },
    mounted(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
}
</script>