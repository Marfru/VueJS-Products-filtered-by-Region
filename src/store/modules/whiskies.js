import axios from 'axios'
const whiskies = {
  namespaced: true,
  state: {
    whiskies: []
  },
  mutations: {
    SET_WHISKIES(state, data) {
      state.whiskies = data
    }
  },
  actions: {
    loadWhiskies({commit}) {
      axios
        .get('http://localhost:8010/data/whiskies.json')
        .then(res => {
          commit('SET_WHISKIES', res.data)
        })
        .catch(err => console.log(err));
    }
  },
}

export default whiskies
