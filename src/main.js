import './assets/style/reset.scss'
import './assets/font/iconfont.css'
import Vue from 'vue'
import App from './App.vue'

// 按需引入
import { NavBar, Icon, Tabbar, TabbarItem, Grid } from 'vant';
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Grid);
import 'amfe-flexible'
import router from './router'
import store from './store'

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')