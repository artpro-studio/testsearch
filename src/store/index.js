import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputSearch: null
  },
  mutations: {
    setInputSearch(state, data){
        state.inputSearch = data
    }
  },
  actions: {
    clickSearch({ commit }, data){
      commit('setInputSearch', data)
    }
  },
  modules: {},
});
