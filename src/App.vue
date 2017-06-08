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

          :totalStateAppropriation2016="totalStateAppropriation2016"

          :tuitionFeesFTE2025="tuitionFeesFTE2025"
          :tuitionFeesFTE2025start="tuitionFeesFTE2025start"
          :tuitionFeesFTE2025min="tuitionFeesFTE2025min"
          :tuitionFeesFTE2025max="tuitionFeesFTE2025max"

          :totalStateAppropriation2025="totalStateAppropriation2025"
          :totalStateAppropriation2025start="totalStateAppropriation2025start"
          :totalStateAppropriation2025min="totalStateAppropriation2025min"
          :totalStateAppropriation2025max="totalStateAppropriation2025max"

          :totalTuitionFees2016="totalTuitionFees2016"
          :totalTuitionFees2025="totalTuitionFees2025"

          :revenueEducationCost2016="revenueEducationCost2016"
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
      'tuitionFeesFTE2025',
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
    tuitionFeesFTE2025start: 10089,
    tuitionFeesFTE2025min: 5000,
    tuitionFeesFTE2025max: 15000,

    totalStateAppropriation2016: 350,
    totalStateAppropriation2025start: 344,
    totalStateAppropriation2025min: 200,
    totalStateAppropriation2025max: 500,

    totalTuitionFees2016: 130.9,

    revenueEducationCost2016: 480.9
  }),
  computed: {
    studentFte2018 () { return this.interpolateStudentFte(2018) },
    studentFte2019 () { return this.interpolateStudentFte(2019) },
    studentFte2020 () { return this.interpolateStudentFte(2020) },
    studentFte2025 () { return this.$store.state.studentFte2025 },
    tuitionFeesFTE2025 () { return this.$store.state.tuitionFeesFTE2025 },
    totalStateAppropriation2025 () { return this.$store.state.totalStateAppropriation2025 },

    totalTuitionFees2025: function () {
      return ((this.tuitionFeesFTE2025 * this.studentFte2025) / 1000000).toFixed(2)
    },
    revenueEducationCost2025: function () {
      return parseFloat(this.totalTuitionFees2025) + parseFloat(this.totalStateAppropriation2025)
    }
  },
  methods: {
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
          tuitionFeesFTE2025: this.tuitionFeesFTE2025,
          totalStateAppropriation2025: this.totalStateAppropriation2025
        }
      })
    }
  }
}
</script>

<style>
</style>
