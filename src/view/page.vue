<template>
    <div>
        <div class="header">
            HAY
        </div>
        <DxTabPanel
            :animation-enabled="animationEnabled"
            :swipe-enabled="swipeEnabled"
            :items="tabPanelItems"
            v-model="selectedIndex"
        >
            <DxItem title='counseling'>
                <template #default>
                    1
                </template>
            </DxItem>
            <DxItem title='prescription'>
                <template #default>
                    <p>2This is Info Tab</p>
                </template>
            </DxItem>
            <DxItem title='home'>
                <template #default>
                    <p>3This is Info Tab</p>
                </template>
            </DxItem>
            <DxItem title='lounge'>
                <template #default>
                    <p>4This is Info Tab</p>
                </template>
            </DxItem>
            <DxItem title='my'>
                <template #default>
                    <p>5This is Info Tab</p>
                </template>
            </DxItem>
        </DxTabPanel>
    </div>
</template>

<script>
import DxTabPanel, {DxItem} from 'devextreme-vue/tab-panel';

export default {
    name: 'page',
    components: {
        DxTabPanel,
        DxItem,
    },
    data(){
        return{
            selectedIndex: 1,
            animationEnabled: true,
            swipeEnabled: true,
            tabPanelItems: [
                {
                    title: '심리상담',
                },
                {
                    title: '로켓처방',
                },
                {
                    title: 'HAY',
                },
                {
                    title: '헤이라운지',
                },
                {
                    title: 'MY공간',
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common.scss';
</style>