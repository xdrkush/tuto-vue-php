import axios from 'axios'

const state = {
  formArticle: {}
}

const mutations = {
  resetFormArticle(state, value) {
    state.formArticle = value
  }
}

const actions = {
  // eslint-disable-next-line no-empty-pattern
  sendArticle ({}, payload) {
    const data = payload
    console.log(data)
  },
  resetArticle ({ commit }) {
    commit('resetFormArticle', {})
  },
  // eslint-disable-next-line no-empty-pattern
  createArticle ({}, payload) {
    axios
      .post('http://localhost:3000/api/create_article.php', payload)
      .then(res => {
        console.log('create')
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}