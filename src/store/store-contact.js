const state = {
  formMessage: {}
}

const mutations = {
  resetFormMessage(state, value) {
    state.formMessage = value
  }
}

const actions = {
  // eslint-disable-next-line no-empty-pattern
  sendMessage ({}, payload) {
    const data = payload
    console.log(data)
  },
  resetMessage ({ commit }) {
    commit('resetFormMessage', {})
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