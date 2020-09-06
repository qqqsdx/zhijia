<template>
          <article class="myfamily">
                <div class="f-img" v-for="(item,index) in imglist" 
                :key="index" >
                    <img :src="item.imgl">
                    <div class="caption">
                        <h2>{{item.title}}</h2>
                        <p>{{item.One}}</p>
                    </div>
                   <div class="tou">
                       <img :src="item.imgs" alt="">
                   </div>
                   <span class="ren">{{item.think}}</span>
                  
                </div>
            </article>

 </template>

<script>
 import img from '../../../assets/images/toux.png'
 import img5 from '../../../assets/images/tu5.png'
export default {
    data(){
        return{
            img:img,
            value1: 0,
            value2: 'a',
            value3:'a',
            option1: [
                { text: '默认排序', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 },
            ],
            option2: [
                { text: '位置', value: 'a' },
                { text: '好评排序', value: 'b' },
                { text: '销量排序', value: 'c' },
            ],
               option3: [
                { text: '风格', value: 'a' },
                { text: '好评排序', value: 'b' },
                { text: '销量排序', value: 'c' },
            ],
            imglist:[
            {
                imgl:img5,
                imgs:img,
                title:'Siri Sun的体验家',
                One:'现代一室一厅。108',
                think:'67人想体验'
            },
            {
                imgl:img5,
                imgs:img,
                title:'Siri Sun的体验家',
                One:'轻奢 现代一室一厅.78m',
                think:'67人想体验'
            },
            {
                imgl:img5,
                imgs:img,
                title:'Siri Sun的体验家',
                One:'现代一室一厅。108',
                think:'67人想体验'
            },
            {
                imgl:img5,
                imgs:img,
                title:'Siri Sun的体验家',
                One:'现代一室一厅。108',
                think:'67人想体验'
            },
            ]
        }
    },
    methods:{
        todetail(id){
           this.$router.push('/tylist/'+id)
        }
    }
}
</script>
<style lang="scss" scoped>
        .myfamily{
          
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .f-title{
                float: left;
                font-size: 23px;
                font-family: DINPro;
                font-weight: bold;
                color: #000000;
            }
            .f-img{
                position: relative;
                width: 100%;
                margin-bottom: 15px;
                padding-left: 31px;

                img{
                    width: 313px;
                    height: 209px;
                }
                .tou{
                    width: 44px;
                    height: 47px;
                    border-radius: 50%;
                    position: absolute;
                    right: 50px;
                    bottom: 42px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    
                }
            }
            .ren{
                float:right;
                color: #9A9A9A;
                font-size: 13px;
                margin-right: 37px;
                margin-top: 20px;
            }
        }
        .van-dropdown-menu{
            width: 100%;
        }
        .caption{
            margin-top: 14px;
            float: left;;
            h2{
                font-size: 17px;
                color: #000000;
            }
            p{
                margin-top: 12px;
                color: #9A9A9A;
                font-size: 13px;
            }
        }
       
</style>