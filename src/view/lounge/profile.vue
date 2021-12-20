<template>
    <div class="profile">
        <img @click="sendMessage('link')" src="@/assets/img/temp_counseler.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'Profile',
    methods: {
        sendMessage(val){
            window.android.setMessage(val);
        }
    },
}
</script>