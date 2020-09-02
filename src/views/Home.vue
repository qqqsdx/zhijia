<template>
  <div>
    <router-view></router-view>
    <van-tabbar 
      v-model="active" 
      active-color="orange" 
      inactive-color="#000" 
      z-index="10"
      route
      placeholder
      @change="onChange">
      <van-tabbar-item 
        :icon="item.icon" 
        v-for="(item, index) in tabList" 
        :key="index"
        :to="item.to"
      >{{ item.label }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabList: [
        {
          icon: 'home-o',
          label: '首页',
          to: '/index'
        },
        {
          icon: 'edit',
          label: 'SHOW',
          to: '/show'
        },
        {
          icon: 'apps-o',
          label: '商品',
          to: '/commodity'
        },
        {
          icon: 'friends-o',
          label: '体验',
          to: '/experience'
        },
        {
          icon: 'manager-o',
          label: '我的',
          to: '/my'
        }
      ]
    };
  },
  methods: {
    onChange(index) {  
    }
  },
};
</script>
<style lang='sass' scoped></style>
