import axios from 'axios'

const state = {
  price: {},
  priceArray: [],
  converter: {}
}

const mutations = {
    mutPrice(state, value) {
      state.price = value
    },
    mutPriceArray(state, value) {
      state.priceArray = value
    },
    mutConverter(state, value) {
      state.converter = value
    }
  }

// Faire un refresh
const actions = {
  // eslint-disable-next-line no-empty-pattern
  changeConverter({commit}, payload) {
    const search = payload
    let converter = {
      EUR: {
        rate_f: state.price.EUR.rate_float,
        code: state.price.EUR.code,
        conversion: search * state.price.EUR.rate_float
      },
      USD: {
        rate_f: state.price.USD.rate_float,
        code: state.price.USD.code,
        conversion: search * state.price.USD.rate_float
      },
      GBP: {
        rate_f: state.price.GBP.rate_float,
        code: state.price.GBP.code,
        conversion: search * state.price.GBP.rate_float
      }
    }
    // console.log(converter)
    // console.log(search)
    commit('mutConverter', converter)
  }
}

const getters = {
  getPrice(state) {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => {
        // console.log(data)
        // console.log(dataArray)

        state.price = res.data.bpi
        state.converter = res.data.bpi

      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}