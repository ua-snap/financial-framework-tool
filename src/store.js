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
    studentFte2025start: 26805,
    studentFte2025min: 10000,
    studentFte2025max: 35000,
    tuitionFeesFTE2025: 10089,
    tuitionFeesFTE2025start: 10089,
    tuitionFeesFTE2025min: 5000,
    tuitionFeesFTE2025max: 15000,
    stateAppropriationFTE2025: 11642,
    stateAppropriationFTE2025start: 11642,
    stateAppropriationFTE2025min: 8000,
    stateAppropriationFTE2025max: 20000
  },
  mutations: {
    update (state, payload) {
      state[payload.field] = payload.value
    }
  }
})
