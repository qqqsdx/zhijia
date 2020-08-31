<template>
  <div class="index">
      <Nav/>
      <Mains/>
  </div>
</template>

<script>
console.log(1);
import Nav from '../components/public/nav'//导航
import Mains from '../components/index/mains'//可以滑动的主体部分
export default {
  data() {
    return {};
  },

  components: {
    //组件注册
    Nav,
    Mains 
  },

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.index{
    
}
</style>
