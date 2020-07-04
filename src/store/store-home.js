const state = {
  firstState: 'Mon premier state !',
  searchNewsData: '',
  newsData: [{
      title: 'Our Changing Planet 1',
      author: 'Hsuk Rd',
      image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
      message: 'Visit ten places on our planet that are undergoing the biggest changes today.'
    },
    {
      title: 'Our Changing Planet 2',
      author: 'Kurt Wagner',
      image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
      message: 'Visit ten places on our planet that are undergoing the biggest changes today.'
    },
    {
      title: 'Our Changing Planet 3',
      author: 'Tux Torvalds',
      image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
      message: 'Visit ten places on our planet that are undergoing the biggest changes today.'
    }
  ],
  items: [
    { header: "Today" },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      title: "Brunch this weekend?",
      subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
    },
    { divider: true, inset: true },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
      subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
    },
    { divider: true, inset: true },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      title: "Oui oui",
      subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
    },
    { divider: true, inset: true },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      title: "Birthday gift",
      subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
    },
    { divider: true, inset: true },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
      title: "Recipe to try",
      subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
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
    console.log(payload)
    commit('mutationSearchNewsData', payload)
  }
}

const getters = {
  countItems: state => {
    return state.items.length
  },
  countNewsData: state => {
    // console.log(state.newsData.length)
    return state.newsData.length
  },
  filterNewsData: state => {
    const titleFilter   = (filter) => filter.title.toLowerCase().includes(state.searchNewsData.toLowerCase()),
          authorFilter  = (filter) => filter.author.toLowerCase().includes(state.searchNewsData.toLowerCase()),
          messageFilter = (filter) => filter.message.toLowerCase().includes(state.searchNewsData.toLowerCase())

    return state.newsData.filter( filter => {
      return titleFilter(filter) || authorFilter(filter) || messageFilter(filter)
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