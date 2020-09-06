import Vue from 'vue'
import Vuex from 'vuex'
import { getcomClassList } from '../utils/api' //商品类别小图标
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        zhutiList: [],
        serveId:0
    },
    mutations: {
        //沙发卫浴小图片的接口
        getClassLists(state, payload) {
            state.zhutiList = payload.list
        },
        setServeId(id){
            console.log(id)
            this.serveId=id;
        }
    },
    actions: {
        async getComClassLists({ commit }) {
            const result = await getcomClassList()
            commit('getClassLists', {
                list: result.zhutiList
            })
        },
    }
})