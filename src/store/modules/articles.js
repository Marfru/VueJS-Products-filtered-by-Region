import axios from 'axios'
const articles = {
  namespaced: true,
  state: {
    articles: []
  },
  mutations: {
    SET_ARTICLES(state, data) {
      state.articles = data
    }
  },
  actions: {
    loadArticles({commit}) {
      axios
        .get('http://localhost:8010/data/articles.json')
        .then(res => {
          commit('SET_ARTICLES', res.data)
        })
        .catch(err => console.log(err));
    }
  },
}

export default articles
