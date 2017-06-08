import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/:studentFte2025/:tuitionFeesFTE2025/:totalStateAppropriation2025',
      name: 'edited'
    }
  ]
})
