 
import Vue from 'vue'
import Vuex from 'vuex'

import home from './store-home'
import contact from './store-contact'
import crypto from './store-crypto'


Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      home, contact, crypto
    },
    strict: process.env.DEV
  })

  return Store
}