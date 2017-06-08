<template>
  <div class="container">
    <h1>UA Financial Framework Visualization Tool</h1>
    <div class="row">
      <div class="col-md-6">
        <spreadsheet
          :studentFte2016="studentFte2016"
          :studentFte2018="studentFte2018"
          :studentFte2019="studentFte2019"
          :studentFte2020="studentFte2020"
          :studentFte2025="studentFte2025"
          :studentFte2025start="studentFte2025start"
          :studentFte2025min="studentFte2025min"
          :studentFte2025max="studentFte2025max"

          :tuitionFeesFTE2016="tuitionFeesFTE2016"
          :tuitionFeesFTE2018="tuitionFeesFTE2018"
          :tuitionFeesFTE2018start="tuitionFeesFTE2018start"
          :tuitionFeesFTE2018min="tuitionFeesFTE2018min"
          :tuitionFeesFTE2018max="tuitionFeesFTE2018max"
          :tuitionFeesFTE2019="tuitionFeesFTE2019"
          :tuitionFeesFTE2019start="tuitionFeesFTE2019start"
          :tuitionFeesFTE2019min="tuitionFeesFTE2019min"
          :tuitionFeesFTE2019max="tuitionFeesFTE2019max"
          :tuitionFeesFTE2020="tuitionFeesFTE2020"
          :tuitionFeesFTE2020start="tuitionFeesFTE2020start"
          :tuitionFeesFTE2020min="tuitionFeesFTE2020min"
          :tuitionFeesFTE2020max="tuitionFeesFTE2020max"

          :tuitionFeesFTE2025="tuitionFeesFTE2025"
          :tuitionFeesFTE2025start="tuitionFeesFTE2025start"
          :tuitionFeesFTE2025min="tuitionFeesFTE2025min"
          :tuitionFeesFTE2025max="tuitionFeesFTE2025max"

          :totalStateAppropriation2016="totalStateAppropriation2016"
          :totalStateAppropriation2018="totalStateAppropriation2018"
          :totalStateAppropriation2018start="totalStateAppropriation2018start"
          :totalStateAppropriation2018min="totalStateAppropriation2018min"
          :totalStateAppropriation2018max="totalStateAppropriation2018max"
          :totalStateAppropriation2019="totalStateAppropriation2019"
          :totalStateAppropriation2019start="totalStateAppropriation2019start"
          :totalStateAppropriation2019min="totalStateAppropriation2019min"
          :totalStateAppropriation2019max="totalStateAppropriation2019max"
          :totalStateAppropriation2020="totalStateAppropriation2020"
          :totalStateAppropriation2020start="totalStateAppropriation2020start"
          :totalStateAppropriation2020min="totalStateAppropriation2020min"
          :totalStateAppropriation2020max="totalStateAppropriation2020max"
          :totalStateAppropriation2025="totalStateAppropriation2025"
          :totalStateAppropriation2025start="totalStateAppropriation2025start"
          :totalStateAppropriation2025min="totalStateAppropriation2025min"
          :totalStateAppropriation2025max="totalStateAppropriation2025max"

          :totalTuitionFees2016="totalTuitionFees2016"
          :totalTuitionFees2018="totalTuitionFees2018"
          :totalTuitionFees2019="totalTuitionFees2019"
          :totalTuitionFees2020="totalTuitionFees2020"
          :totalTuitionFees2025="totalTuitionFees2025"

          :revenueEducationCost2016="revenueEducationCost2016"
          :revenueEducationCost2018="revenueEducationCost2018"
          :revenueEducationCost2019="revenueEducationCost2019"
          :revenueEducationCost2020="revenueEducationCost2020"
          :revenueEducationCost2025="revenueEducationCost2025"
          v-on:updated="updated"
        ></spreadsheet>
      </div>
      <div class="col-md-6">
        <!-- <graph
          :studentFte2016="studentFte2016"
          :studentFte2025="studentFte2025"
          :totalTuitionFees2016="totalTuitionFees2016"
          :totalTuitionFees2025="totalTuitionFees2025"
          :totalStateAppropriation2016="totalStateAppropriation2016"
          :totalStateAppropriation2025="totalStateAppropriation2025"
        ></graph> -->
      </div>
    </div>
  </div>
</template>

<script>
import Spreadsheet from './components/Spreadsheet'
import Graph from './components/Graph'
import _ from 'lodash'

export default {
  name: 'app',
  components: {
    Spreadsheet,
    Graph
  },
  // Here, we want to initialize the state of the Store
  // from parameters present in the URL (if present).
  created () {
    this.restoreValuesFromUrl([
      'studentFte2025',
      'tuitionFeesFTE2018',
      'tuitionFeesFTE2019',
      'tuitionFeesFTE2020',
      'tuitionFeesFTE2025',
      'totalStateAppropriation2018',
      'totalStateAppropriation2019',
      'totalStateAppropriation2020',
      'totalStateAppropriation2025'
    ])
  },
  data: () => ({
    /* Student FTEs (enrollment) */
    studentFte2016: 19229,
    // Linear interpolation for FY2017-2020 to this last value
    studentFte2025start: 26805,
    studentFte2025min: 10000,
    studentFte2025max: 35000,

    tuitionFeesFTE2016: 6806,
    tuitionFeesFTE2018start: 7000,
    tuitionFeesFTE2018min: 5000,
    tuitionFeesFTE2018max: 15000,
    tuitionFeesFTE2019start: 7500,
    tuitionFeesFTE2019min: 5000,
    tuitionFeesFTE2019max: 15000,
    tuitionFeesFTE2020start: 8000,
    tuitionFeesFTE2020min: 5000,
    tuitionFeesFTE2020max: 15000,
    tuitionFeesFTE2025start: 10089,
    tuitionFeesFTE2025min: 5000,
    tuitionFeesFTE2025max: 15000,

    totalStateAppropriation2016: 350,
    totalStateAppropriation2018min: 200,
    totalStateAppropriation2018max: 500,
    totalStateAppropriation2018start: 340,
    totalStateAppropriation2019min: 200,
    totalStateAppropriation2019max: 500,
    totalStateAppropriation2019start: 330,
    totalStateAppropriation2020min: 200,
    totalStateAppropriation2020max: 500,
    totalStateAppropriation2020start: 323,
    totalStateAppropriation2025min: 200,
    totalStateAppropriation2025max: 500,
    totalStateAppropriation2025start: 318,

    totalTuitionFees2016: 130.9,

    revenueEducationCost2016: 480.9
  }),
  computed: {
    studentFte2018 () { return this.interpolateStudentFte(2018) },
    studentFte2019 () { return this.interpolateStudentFte(2019) },
    studentFte2020 () { return this.interpolateStudentFte(2020) },
    studentFte2025 () { return this.$store.state.studentFte2025 },

    tuitionFeesFTE2018 () { return this.$store.state.tuitionFeesFTE2018 },
    tuitionFeesFTE2019 () { return this.$store.state.tuitionFeesFTE2019 },
    tuitionFeesFTE2020 () { return this.$store.state.tuitionFeesFTE2020 },
    tuitionFeesFTE2025 () { return this.$store.state.tuitionFeesFTE2025 },

    totalStateAppropriation2018 () { return this.$store.state.totalStateAppropriation2018 },
    totalStateAppropriation2019 () { return this.$store.state.totalStateAppropriation2019 },
    totalStateAppropriation2020 () { return this.$store.state.totalStateAppropriation2020 },
    totalStateAppropriation2025 () { return this.$store.state.totalStateAppropriation2025 },

    totalTuitionFees2018: function () { return this.computeTotalTuitionFees(this.tuitionFeesFTE2018, this.studentFte2018) },
    totalTuitionFees2019: function () { return this.computeTotalTuitionFees(this.tuitionFeesFTE2019, this.studentFte2019) },
    totalTuitionFees2020: function () { return this.computeTotalTuitionFees(this.tuitionFeesFTE2020, this.studentFte2020) },
    totalTuitionFees2025: function () { return this.computeTotalTuitionFees(this.tuitionFeesFTE2025, this.studentFte2025) },

    revenueEducationCost2018: function () { return this.computeRevenueEducationCost(this.totalTuitionFees2025, this.totalStateAppropriation2018) },
    revenueEducationCost2019: function () { return this.computeRevenueEducationCost(this.totalTuitionFees2025, this.totalStateAppropriation2019) },
    revenueEducationCost2020: function () { return this.computeRevenueEducationCost(this.totalTuitionFees2025, this.totalStateAppropriation2020) },
    revenueEducationCost2025: function () { return this.computeRevenueEducationCost(this.totalTuitionFees2025, this.totalStateAppropriation2025) }
  },
  methods: {
    computeRevenueEducationCost (tuition, appropriation) {
      return (parseFloat(tuition) + parseFloat(appropriation)).toFixed(2)
    },
    computeTotalTuitionFees (fees, fte) {
      return ((fees * fte) / 1000000).toFixed(2)
    },
    restoreValuesFromUrl (items) {
      _.each(items, (item) => {
        if (this.$route.params[item]) {
          this.setStoreValue(item, this.validate(item, this.$route.params[item]))
        }
      })
    },
    setStoreValue (item, value) {
      this.$store.commit('update', {
        field: item,
        value: value
      })
    },
    // Returns a linear interpolation of student population
    interpolateStudentFte (year) {
      var m = (this.studentFte2025 - this.studentFte2016) / 9
      return Math.floor(m * (year - 2016) + 19229)
    },
    // Basic validation to check type safety,
    // can add min/max if needed later.  Sets to 0 if invalid.
    validate (item, value) {
      var validated = parseInt(value)
      if (_.isNaN(validated) === true) {
        validated = 0
      }
      // If validated was not a valid number, we will set the value
      // to the item's minimum value.
      switch (item) {
        case 'studentFte2025':
          if (validated >= this.studentFte2025min && validated <= this.studentFte2025max) {
            return validated
          } else if (validated < this.studentFte2025min) {
            return this.studentFte2025min
          } else {
            return this.studentFte2025max
          }
        case 'tuitionFeesFTE2025':
          if (validated >= this.tuitionFeesFTE2025min && validated <= this.tuitionFeesFTE2025max) {
            return validated
          } else if (validated < this.tuitionFeesFTE2025min) {
            return this.tuitionFeesFTE2025min
          } else {
            return this.tuitionFeesFTE2025max
          }
        case 'totalStateAppropriation2025':
          if (validated >= this.totalStateAppropriation2025min && validated <= this.totalStateAppropriation2025max) {
            return validated
          } else if (validated < this.totalStateAppropriation2025min) {
            return this.totalStateAppropriation2025min
          } else {
            return this.totalStateAppropriation2025max
          }
        default:
          break
      }
      return validated
    },
    updated: function (item, value) {
      this.setStoreValue(item, value)
      this.$router.push({
        name: 'edited',
        params: {
          studentFte2025: this.studentFte2025,
          tuitionFeesFTE2018: this.tuitionFeesFTE2018,
          tuitionFeesFTE2019: this.tuitionFeesFTE2019,
          tuitionFeesFTE2020: this.tuitionFeesFTE2020,
          tuitionFeesFTE2025: this.tuitionFeesFTE2025,
          totalStateAppropriation2018: this.totalStateAppropriation2018,
          totalStateAppropriation2019: this.totalStateAppropriation2019,
          totalStateAppropriation2020: this.totalStateAppropriation2020,
          totalStateAppropriation2025: this.totalStateAppropriation2025
        }
      })
    }
  }
}
</script>

<style>
</style>
