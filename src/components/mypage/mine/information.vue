<template>
<div class="information">
    <information />
    <main>
    <div class="like" v-for="(item,index) in list" :key="index"><span>{{item.icon}}</span>{{item.name}}</div>
        
</main>
</div>
</template>

<script>
import information from '../discountcomponents/informationtitle'
export default {
    data() {
        return {
            list:[
                {
                    icon:'👍',
                    name:'被喜欢'
                },
                 {
                    icon:'👍',
                    name:'评论'
                },

                 {
                    icon:'👍',
                    name:'新增关注'
                },
                 {
                    icon:'👍',
                    name:'系统通知'
                },
            ]
        }
    },
    components: {
        information
    }

}
</script>

<style lang="scss" scoped>
.information {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #f8f8f8;
    main {
         background: #fff;
        div {
            margin-left: 25px;
        width: 100%;
        height: 60px;
       
        // margin-bottom: 15px;
        line-height: 60px;
        font-size: 14px;
        border-bottom:1px solid #ccc;
        span{
            margin-right: 15px;
        }
        .inform{
            margin-top: 15px;
            background: forestgreen;
        }

    }
}
}
</style>
