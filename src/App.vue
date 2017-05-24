<template>
  <div id="app" class="container">
    <h1>UA Financial Framework Visualization Tool</h1>
    <div class="row">
      <div class="col-md-6">
        <spreadsheet
          :studentFte2016="studentFte2016"
          :studentFte2025="studentFte2025"
          :tuitionFeesPerStudent2016="tuitionFeesPerStudent2016"
          :tuitionFeesPerStudent2025="tuitionFeesPerStudent2025"
          :tuitionFees2016="tuitionFees2016"
          :tuitionFees2025="tuitionFees2025"
          :stateAppropriation2016.sync="stateAppropriation2016"
          :stateAppropriation2025="stateAppropriation2025"
          :revenueEducationCost2016="revenueEducationCost2016"
          :revenueEducationCost2025="revenueEducationCost2025"
          v-on:updated="updated"
        ></spreadsheet>
      </div>
      <div class="col-md-6">
        <graph
          :studentFte2016="studentFte2016"
          :studentFte2025="studentFte2025"
          :tuitionFeesPerStudent2016="tuitionFeesPerStudent2016"
          :tuitionFeesPerStudent2025="tuitionFeesPerStudent2025"
          :tuitionFees2016="tuitionFees2016"
          :tuitionFees2025="tuitionFees2025"
          :stateAppropriation2016="stateAppropriation2016"
          :stateAppropriation2025="stateAppropriation2025"
          :revenueEducationCost2016="revenueEducationCost2016"
          :revenueEducationCost2025="revenueEducationCost2025"
          v-on:updated="updated"
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
    studentFte2025: 19229,
    tuitionFeesPerStudent2016: 6086,
    tuitionFeesPerStudent2025: 6086,
    tuitionFees2016: 130.9,
    tuitionFees2025: 130.9,
    stateAppropriation2016: 350,
    stateAppropriation2025: 350
  }),
  computed: {
    revenueEducationCost2016: function () {
      return parseFloat(this.tuitionFees2016) + parseFloat(this.stateAppropriation2016)
    },
    revenueEducationCost2025: function () {
      return this.tuitionFees2025 + this.stateAppropriation2025
    }
  },
  methods: {
    updated: function (item, value) {
      this[item] = value
    }
  }
}
</script>

<style>
</style>
