import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: true
  },
  mutations: {
    SET_ISCOLLAPSE(state, payload) {
      state.isCollapse= payload;
    }
  },
  actions: {
  }
})
