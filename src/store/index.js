import Vue from 'vue'
import Vuex from 'vuex'
import whiskies from './modules/whiskies'
import articles from './modules/articles'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    whiskies,
    articles
  }
})
