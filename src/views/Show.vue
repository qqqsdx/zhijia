<template>
<div class="show">
    <!-- 头部 -->
    <Myheader />
    <!-- 设计和灵感 -->
    <DesignAfflatus />
    <!-- 热门设计 -->
    <Populardesign />
    <!-- 精选灵感 -->
    <SelectionInspiration />
</div>
</template>

<script>
import Myheader from '../components/Show/Myheader'
import DesignAfflatus from '../components/Show/DesignAfflatus'
import SelectionInspiration from '../components/Show/Populardesign'
import Populardesign from '../components/Show/SelectionInspiration'
export default {
    data() {
        return {};
    },

    components: {
        Myheader,
        DesignAfflatus,
        Populardesign,
        SelectionInspiration
    },

    computed: {},

    mounted() {

    },

    methods: {
        onClickLeft() {
            Toast('返回');
        },
        onClickRight() {
            Toast('按钮');
        },
    }
};
</script>

<style lang="scss">
.show {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background:#fff;
}
</style>
