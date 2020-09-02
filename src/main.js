import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "amfe-flexible"
// 全局引入Vant Ui
import Vant from "vant";
import "./assets/style/reset.css";
import "vant/lib/index.css";
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')