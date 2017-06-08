import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/:studentFte2025/:tuitionFeesFTE2018/:tuitionFeesFTE2019/:tuitionFeesFTE2020/:tuitionFeesFTE2025/:totalStateAppropriation2018/:totalStateAppropriation2019/:totalStateAppropriation2020/:totalStateAppropriation2025',
      name: 'edited'
    }
  ]
})
