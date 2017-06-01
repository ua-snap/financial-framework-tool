<template>
  <div class="container">
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
  // Here, we want to initialize the state of the Store
  // from parameters present in the URL (if present).
  created () {
    this.setStoreValue('studentFte2025', parseInt(this.$store.state.route.params.studentFte2025))
    this.setStoreValue('tuitionFeesFTE2025', parseInt(this.$store.state.route.params.tuitionFeesFTE2025))
    this.setStoreValue('stateAppropriationFTE2025', parseInt(this.$store.state.route.params.stateAppropriationFTE2025))
  },
  data: () => ({
    studentFte2016: 19229,
    tuitionFeesFTE2016: 6806,
    stateAppropriationFTE2016: 16692
  }),
  computed: {
    studentFte2025 () {
      return this.$store.state.studentFte2025
    },
    tuitionFeesFTE2025 () {
      return this.$store.state.tuitionFeesFTE2025
    },
    stateAppropriationFTE2025 () {
      return this.$store.state.stateAppropriationFTE2025
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
    setStoreValue (item, value) {
      this.$store.commit('update', {
        field: item,
        value: value
      })
    },
    updated: function (item, value) {
      this.setStoreValue(item, value)
      this.$router.push({
        name: 'root',
        params: {
          studentFte2025: this.studentFte2025,
          tuitionFeesFTE2025: this.tuitionFeesFTE2025,
          stateAppropriationFTE2025: this.stateAppropriationFTE2025
        }
      })
    }
  }
}
</script>

<style>
</style>
