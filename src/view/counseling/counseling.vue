<template>
    <div>
        <!-- <router-view /> -->
        counseling
        <!-- <button @click="$router.push('/page/hay')" type="button">go test</button> -->
        <!-- <router-link :to="{name: 'test', params: {id: 'a'}}">go test</router-link> -->
        <router-link to="/page/prescribe">go prescribe</router-link>
    </div>
</template>

<script>
export default {
    name: 'counseling',
}
</script>