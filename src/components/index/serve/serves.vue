<template>
    <div class="serves">
        <van-nav-bar  title="至家服务"  left-arrow @click-left='goto'>
        </van-nav-bar>
        <main>
        <van-tabs v-model="id" title-active-color='#000' line-width='55' color='#000' :swipeable='true' :animated='true'>
            <van-tab title="设计服务">
                <Sjfw/>
            </van-tab>
            <van-tab title="免费送装">
                <Mfsz/>
            </van-tab>
            <van-tab title="质量保证">
                <Zlbz/>
            </van-tab>
            <!-- 安全环保模块 -->
            <van-tab title="全球环保">
                <Aqhb/>
            </van-tab>
        </van-tabs>
        </main>
    </div>
</template>
<script>
import Aqhb from './aqhb'
import Sjfw from './sjfw'
import Mfsz from './mfsz'
import Zlbz from './zlbz'
export default {
    data() {
        return {
            id:'1',
        }
    },
    components:{
        Aqhb,//安全环保组件
        Sjfw,//设计服务组件
        Mfsz,//免费送装
        Zlbz,//质量保证
    },
     methods:{
        qqq(id){
            this.id = this.$route.params.id
            console.log(this.id)
        },
        goto(){
            this.$router.go(-1)
        }
    },
    beforeMount(){
        this.qqq()
    }
}
</script>

<style lang='scss' scoped>
</style>
