import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: {
    // These defaults are from the UA Financial Framework assumptions
    // provided via email/spreadsheet
    studentFte2025: 26805,
    tuitionFeesFTE2018: 7000,
    tuitionFeesFTE2019: 7500,
    tuitionFeesFTE2020: 8000,
    tuitionFeesFTE2025: 10089,
    totalStateAppropriation2018: 340,
    totalStateAppropriation2019: 330,
    totalStateAppropriation2020: 323,
    totalStateAppropriation2025: 312
  },
  mutations: {
    update (state, payload) {
      state[payload.field] = payload.value
    }
  }
})
