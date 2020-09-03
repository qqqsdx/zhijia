import './assets/style/reset.scss'
import './assets/font/iconfont.css'
import Vue from 'vue'
import Vant from 'vant';
import App from './App.vue'
import 'vant/lib/index.css';

Vue.use(Vant);
// 按需引入
// import { NavBar, Icon, Tabbar, TabbarItem, Grid, GridItem, Image as VanImage, Button, Field, Swipe, SwipeItem } from 'vant';


// Vue.use(Swipe);
// Vue.use(SwipeItem);
// Vue.use(Field);
// Vue.use(Button);
// Vue.use(VanImage);
// Vue.use(GridItem);
// Vue.use(Icon);
// Vue.use(NavBar);
// Vue.use(Tabbar);
// Vue.use(TabbarItem);
// Vue.use(Grid);
import 'amfe-flexible'
import router from './router'
import store from './store'

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')