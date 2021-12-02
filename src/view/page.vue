<template>
    <div>
        <DxTabPanel
            :animation-enabled="animationEnabled"
            :swipe-enabled="swipeEnabled"
            v-model="selectedIndex"
        >
            <DxItem title='심리상담'>
                <template #default>
                    <router-view name="viewCounseling" />
                        <!-- <Counseling /> -->
                    <!-- </router-view> -->
                    <!-- 심리상담 -->
                </template>
            </DxItem>
            <DxItem title='로켓처방'>
                <template #default>
                    <router-view name="viewPrescribe" />
                    <!-- 로켓처방 -->
                </template>
            </DxItem>
            <DxItem title='HAY'>
                <template #default>
                    <router-view name="viewHay" />
                    <!-- HAY -->
                </template>
            </DxItem>
            <DxItem title='헤이라운지'>
                <template #default>
                    <router-view name="viewLounge" />
                    <!-- 헤이라운지 -->
                </template>
            </DxItem>
            <DxItem title='MY공간'>
                <template #default>
                    <router-view name="viewMy" />
                    <!-- MY공간 -->
                </template>
            </DxItem>
        </DxTabPanel>
    </div>
</template>

<script>
import DxTabPanel, {DxItem} from 'devextreme-vue/tab-panel';
// import Counseling from './counseling/counseling.vue';

export default {
    name: 'page',
    components: {
        DxTabPanel,
        DxItem,
        // Counseling,
    },
    data(){
        return{
            selectedIndex: 1,
            animationEnabled: true,
            swipeEnabled: true,
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common.scss';
</style>