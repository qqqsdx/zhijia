import Vue from 'vue'
import Vuex from 'vuex'
import {getcomClassList} from '../utils/api'//商品类别小图标
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    zhutiList:[]
  },
  mutations: {
  getClassLists(state,payload) {
    state.zhutiList = payload.list
  },
  },
  actions: {
    async getComClassLists({commit}) {
      const result = await getcomClassList()
      commit('getClassLists', {
        list: result.zhutiList
      })
    },
  }
})
