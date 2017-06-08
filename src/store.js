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
    tuitionFeesFTE2025: 10089,
    stateAppropriationFTE2025: 11642
  },
  mutations: {
    update (state, payload) {
      state[payload.field] = payload.value
    }
  }
})
