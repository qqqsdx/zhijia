<template>
<div class="selection-inspiration">
    <Mainnav :title="title" :more="more" />
    <Mainlist :der='der' :list="list"/>
</div>
</template>

<script>
import Mainnav from './Mainnav'
import Mainlist from './Mainlist'
export default {
    data() {
        return {
            title:'热门设计',
            more:"更多",
            der:1,
            list:[
                {url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=212071525,4086975619&fm=26&gp=0.jpg'},
                {url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2543255366,3590655997&fm=26&gp=0.jpg'},
                {url:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2305909707,1135413783&fm=26&gp=0.jpg'},
                 {url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=212071525,4086975619&fm=26&gp=0.jpg'},
                {url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2543255366,3590655997&fm=26&gp=0.jpg'},
                {url:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2305909707,1135413783&fm=26&gp=0.jpg'},
                 {url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=212071525,4086975619&fm=26&gp=0.jpg'},
                {url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2543255366,3590655997&fm=26&gp=0.jpg'},
                {url:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2305909707,1135413783&fm=26&gp=0.jpg'},
                 {url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=212071525,4086975619&fm=26&gp=0.jpg'},
                {url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2543255366,3590655997&fm=26&gp=0.jpg'},
                {url:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2305909707,1135413783&fm=26&gp=0.jpg'},
                 {url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=212071525,4086975619&fm=26&gp=0.jpg'},
                {url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2543255366,3590655997&fm=26&gp=0.jpg'},
                {url:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2305909707,1135413783&fm=26&gp=0.jpg'},
                 {url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=212071525,4086975619&fm=26&gp=0.jpg'},
                {url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2543255366,3590655997&fm=26&gp=0.jpg'},
                {url:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2305909707,1135413783&fm=26&gp=0.jpg'},
                 {url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=212071525,4086975619&fm=26&gp=0.jpg'},
                {url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2543255366,3590655997&fm=26&gp=0.jpg'},
                {url:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2305909707,1135413783&fm=26&gp=0.jpg'},
                 {url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=212071525,4086975619&fm=26&gp=0.jpg'},
                {url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2543255366,3590655997&fm=26&gp=0.jpg'},
            ]
        };
    },

    components: {
        Mainnav,
        Mainlist
    },

    computed: {},

    mounted() {},

    methods: {}
};
</script>

<style lang='scss' >
.selection-inspiration{
    width: 100%;
}
</style>
