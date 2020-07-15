import axios from 'axios'

const state = {
  firstState: 'Mon premier state !',
  searchNewsData: '',
  newsData: [],
  items: [
    { header: "Today" },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      name: "Brunch this weekend?",
      subname: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
    },
    { divider: true, inset: true },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      name: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
      subname: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
    },
    { divider: true, inset: true },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      name: "Oui oui",
      subname: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
    },
    { divider: true, inset: true },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      name: "Birthday gift",
      subname: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
    },
    { divider: true, inset: true },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
      name: "Recipe to try",
      subname: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
    }
  ]
}

const mutations = {
  mutationSearchNewsData(state, value) {
    state.searchNewsData = value
  }
}

const actions = {
  // eslint-disable-next-line no-empty-pattern
  editSearchNewsData({ commit }, payload) {
    const data = payload
    commit('mutationSearchNewsData', data)
  }
}

const getters = {
  getNewsData(state) {
    axios
      .get('http://localhost:3000/api/product/read.php')
      .then(res => {
        console.log('RES DATA')
        console.log(res)
        // console.log(dataArray)
        console.log(res.data)

        state.newsData = res.data.records

      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
  },
  countItems: state => {
    return state.items.length
  },
  countNewsData: state => {
    // console.log(state.newsData.length)
    return state.newsData.length
  },
  filterNewsData: state => {
    const dataNews = state.newsData
    const nameFilter = (filter) => filter.name.toLowerCase().includes(state.searchNewsData.toLowerCase())
    return dataNews.filter( filter => {
      return nameFilter(filter)
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