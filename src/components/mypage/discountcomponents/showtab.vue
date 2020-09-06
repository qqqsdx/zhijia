<template>
<div class="tab-main_show">
    <div>
    </div>
    <van-tabs v-model="active">
        <van-tab title="创作">
            暂无
        </van-tab>
        <van-tab title="灵感">
            暂无                     

        </van-tab>
        <van-tab title="喜欢">
            <div class="showlike-wrap">
            <div class="showlike" v-for="(item,index) in list" :key="index">
                <img :src="item.img" alt="">
                <span>{{item.info}}</span>
            </div>
            </div>
</van-tab>

    </van-tabs>

</div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            list:[{
                    img:'https://img.alicdn.com/imgextra/i4/43273500/O1CN012Fyqce1bj2qfVGE5B_!!0-saturn_solar.jpg_220x220.jpg',
                    info:'气质与品位共存的空间',
                    
            },
            {
                    img:'https://img.alicdn.com/imgextra/i4/43273500/O1CN012Fyqce1bj2qfVGE5B_!!0-saturn_solar.jpg_220x220.jpg',
                    info:'气质与品位共存的空间气质与品位共存的空间',
                    
            },
            {
                    img:'https://img.alicdn.com/imgextra/i4/43273500/O1CN012Fyqce1bj2qfVGE5B_!!0-saturn_solar.jpg_220x220.jpg',
                    info:'气质与品位共存的空间',
                    
            },
            ]
            
    }
    },
    methods: {
        onClick(data) {
            
        },
        onClickone(data) {
            
        }
    },
};
</script>

<style lang="scss" scope>
@import '../../../assets/style/a.css';

.tab-main_show {
    .showlike-wrap{
        display: flex;
        flex-flow: wrap;
  
.showlike{
    width: 165px;
    margin-bottom: 15px;
    margin-right: 7px;    
    img{
        width:165px;
        height: 120px;
        display: block;
}
span{
    height: 40px;
    width:165px;
    line-height: 40px;
    font-size: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display:inline-block;
    padding: 0px 5px;

}
}
  }
    
    
.van-tab__pane,
.van-tab__pane-wrapper {
    padding: 0px 15px;
}

.tab-main_show[data-v-8a3282de] {
    background: #fff;
}
.van-tab__pane,
.van-tab__pane-wrapper {
    position: fixed;
    top: 105px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    overflow: auto;
    background: #f8f8f8;
    padding-top: 15px;
}

}

</style>
