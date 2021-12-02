<template>
    <div class="home">
        <img @click="openFullscreen" src="@/assets/img/temp.png" class="gate" alt="">
        <!-- <button class="btnOpen" type="button">HAY Start</button> -->
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
            this.$router.push('/page');
        },
    }
}
</script>