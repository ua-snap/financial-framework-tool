<template>
  <div class="container">
    <h1>UA Financial Framework Visualization Tool</h1>
    <div class="row">
      <div class="col-md-6">
        <spreadsheet
          :studentFte2016="studentFte2016"
          :studentFte2025="studentFte2025"
          :studentFte2025start="studentFte2025start"
          :studentFte2025min="studentFte2025min"
          :studentFte2025max="studentFte2025max"
          :tuitionFeesFTE2016="tuitionFeesFTE2016"
          :tuitionFeesFTE2025="tuitionFeesFTE2025"
          :tuitionFeesFTE2025start="tuitionFeesFTE2025start"
          :tuitionFeesFTE2025min="tuitionFeesFTE2025min"
          :tuitionFeesFTE2025max="tuitionFeesFTE2025max"
          :stateAppropriationFTE2016="stateAppropriationFTE2016"
          :stateAppropriationFTE2025="stateAppropriationFTE2025"
          :stateAppropriationFTE2025start="stateAppropriationFTE2025start"
          :stateAppropriationFTE2025min="stateAppropriationFTE2025min"
          :stateAppropriationFTE2025max="stateAppropriationFTE2025max"
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
      'stateAppropriationFTE2025'
    ])
  },
  data: () => ({
    studentFte2016: 19229,
    studentFte2025start: 26805,
    studentFte2025min: 10000,
    studentFte2025max: 35000,
    tuitionFeesFTE2016: 6806,
    tuitionFeesFTE2025start: 10089,
    tuitionFeesFTE2025min: 5000,
    tuitionFeesFTE2025max: 15000,
    stateAppropriationFTE2016: 16692,
    stateAppropriationFTE2025start: 11642,
    stateAppropriationFTE2025min: 8000,
    stateAppropriationFTE2025max: 20000
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
    restoreValuesFromUrl (items) {
      console.log(items)
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
    // Basic validation to check type safety,
    // can add min/max if needed later.  Sets to 0 if invalid.
    validate (item, value) {
      var validated = parseInt(value)
      console.log(validated)
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
        case 'stateAppropriationFTE2025':
          if (validated >= this.stateAppropriationFTE2025min && validated <= this.stateAppropriationFTE2025max) {
            return validated
          } else if (validated < this.stateAppropriationFTE2025min) {
            return this.stateAppropriationFTE2025min
          } else {
            return this.stateAppropriationFTE2025max
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
          stateAppropriationFTE2025: this.stateAppropriationFTE2025
        }
      })
    }
  }
}
</script>

<style>
</style>
