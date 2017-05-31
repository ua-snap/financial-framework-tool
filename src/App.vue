<template>
  <div id="app" class="container">
    <h1>UA Financial Framework Visualization Tool</h1>
    <div class="row">
      <div class="col-md-6">
        <spreadsheet
          :studentFte2016="studentFte2016"
          :studentFte2025="studentFte2025"
          :tuitionFeesFTE2016="tuitionFeesFTE2016"
          :tuitionFeesFTE2025="tuitionFeesFTE2025"
          :stateAppropriationFTE2016="stateAppropriationFTE2016"
          :stateAppropriationFTE2025="stateAppropriationFTE2025"
          :totalTuitionFees2016="totalTuitionFees2016"
          :totalTuitionFees2025="totalTuitionFees2025"
          :totalStateAppropriation2016="totalStateAppropriation2016"
          :totalStateAppropriation2025="totalStateAppropriation2025"
          :revenueEducationCost2016="revenueEducationCost2016"
          :revenueEducationCost2025="revenueEducationCost2025"
          v-on:updated="updated"
        ></spreadsheet>
      </div>
      <div class="col-md-6">
        <graph
          :studentFte2016="studentFte2016"
          :studentFte2025="studentFte2025"
          :totalTuitionFees2016="totalTuitionFees2016"
          :totalTuitionFees2025="totalTuitionFees2025"
          :totalStateAppropriation2016="totalStateAppropriation2016"
          :totalStateAppropriation2025="totalStateAppropriation2025"
        ></graph>
      </div>
    </div>
  </div>
</template>

<script>
import Spreadsheet from './components/Spreadsheet'
import Graph from './components/Graph'

export default {
  name: 'app',
  components: {
    Spreadsheet,
    Graph
  },
  data: () => ({
    studentFte2016: 19229,
//    studentFte2025: 26805,
    tuitionFeesFTE2016: 6806,
    tuitionFeesFTE2025: 10069,
    stateAppropriationFTE2016: 16692,
    stateAppropriationFTE2025: 11642
  }),
  computed: {
    studentFte2025: function () {
      return this.$store.state.studentFte2025
    },
    totalTuitionFees2016: function () {
      return ((this.tuitionFeesFTE2016 * this.studentFte2016) / 1000000).toFixed(2)
    },
    totalTuitionFees2025: function () {
      return ((this.tuitionFeesFTE2025 * this.studentFte2025) / 1000000).toFixed(2)
    },
    totalStateAppropriation2016: function () {
      return ((this.stateAppropriationFTE2016 * this.studentFte2016) / 1000000).toFixed(2)
    },
    totalStateAppropriation2025: function () {
      return ((this.stateAppropriationFTE2025 * this.studentFte2025) / 1000000).toFixed(2)
    },
    revenueEducationCost2016: function () {
      return (((this.tuitionFeesFTE2016 + this.stateAppropriationFTE2016) * this.studentFte2016) / 1000000).toFixed(2)
    },
    revenueEducationCost2025: function () {
      return (((this.tuitionFeesFTE2025 + this.stateAppropriationFTE2025) * this.studentFte2025) / 1000000).toFixed(2)
    }
  },
  methods: {
    updated: function (item, value) {
      if (item === 'studentFte2025') {
        this.$store.commit('update', value)
      } else {
        this[item] = value
      }
    }
  }
}
</script>

<style>
</style>
