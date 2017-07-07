<template>
  <div class="container-fluid">
    <h1>UA Financial Framework Visualization Tool</h1>
    <div class="row">
      <div class="col-md-6">
        <spreadsheet
          :studentFte2016="studentFte2016"
          :studentFte2018="studentFte2018"
          :studentFte2019="studentFte2019"
          :studentFte2020="studentFte2020"
          :studentFte2025="studentFte2025"
          :studentFtePercentChange="studentFtePercentChange"
          :studentFtePercentChangeStart="studentFtePercentChangeStart"
          :studentFtePercentChangeMin="studentFtePercentChangeMin"
          :studentFtePercentChangeMax="studentFtePercentChangeMax"

          :tuitionFeesFTE2016="tuitionFeesFTE2016"
          :tuitionFeesFTE2018="tuitionFeesFTE2018"
          :tuitionFeesFTE2018start="tuitionFeesFTE2018start"
          :tuitionFeesFTE2018Min="tuitionFeesFTE2018Min"
          :tuitionFeesFTE2018Max="tuitionFeesFTE2018Max"
          :tuitionFeesFTE2019="tuitionFeesFTE2019"
          :tuitionFeesFTE2019start="tuitionFeesFTE2019start"
          :tuitionFeesFTE2019Min="tuitionFeesFTE2019Min"
          :tuitionFeesFTE2019Max="tuitionFeesFTE2019Max"
          :tuitionFeesFTE2020="tuitionFeesFTE2020"
          :tuitionFeesFTE2020start="tuitionFeesFTE2020start"
          :tuitionFeesFTE2020Min="tuitionFeesFTE2020Min"
          :tuitionFeesFTE2020Max="tuitionFeesFTE2020Max"

          :tuitionFeesFTE2025="tuitionFeesFTE2025"
          :tuitionFeesFTE2025start="tuitionFeesFTE2025start"
          :tuitionFeesFTE2025Min="tuitionFeesFTE2025Min"
          :tuitionFeesFTE2025Max="tuitionFeesFTE2025Max"

          :totalStateAppropriation2016="totalStateAppropriation2016"
          :totalStateAppropriation2018="totalStateAppropriation2018"
          :totalStateAppropriation2018start="totalStateAppropriation2018start"
          :totalStateAppropriation2018Min="totalStateAppropriation2018Min"
          :totalStateAppropriation2018Max="totalStateAppropriation2018Max"
          :totalStateAppropriation2019="totalStateAppropriation2019"
          :totalStateAppropriation2019start="totalStateAppropriation2019start"
          :totalStateAppropriation2019Min="totalStateAppropriation2019Min"
          :totalStateAppropriation2019Max="totalStateAppropriation2019Max"
          :totalStateAppropriation2020="totalStateAppropriation2020"
          :totalStateAppropriation2020start="totalStateAppropriation2020start"
          :totalStateAppropriation2020Min="totalStateAppropriation2020Min"
          :totalStateAppropriation2020Max="totalStateAppropriation2020Max"
          :totalStateAppropriation2025="totalStateAppropriation2025"
          :totalStateAppropriation2025start="totalStateAppropriation2025start"
          :totalStateAppropriation2025Min="totalStateAppropriation2025Min"
          :totalStateAppropriation2025Max="totalStateAppropriation2025Max"

          :stateAppropriationPerFTE2016="stateAppropriationPerFTE2016"
          :stateAppropriationPerFTE2018="stateAppropriationPerFTE2018"
          :stateAppropriationPerFTE2019="stateAppropriationPerFTE2019"
          :stateAppropriationPerFTE2020="stateAppropriationPerFTE2020"
          :stateAppropriationPerFTE2025="stateAppropriationPerFTE2025"

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
        <reset-button
          id="reset"
          v-on:resetdefaults="resetDefaults"
        ></reset-button>

        <share-button
          id="share"
        ></share-button>
      </div>
      <div class="col-md-6">
        <graph
          :studentFte2016="studentFte2016"
          :studentFte2018="studentFte2018"
          :studentFte2019="studentFte2019"
          :studentFte2020="studentFte2020"
          :studentFte2025="studentFte2025"

          :totalStateAppropriation2016="totalStateAppropriation2016"
          :totalStateAppropriation2018="totalStateAppropriation2018"
          :totalStateAppropriation2019="totalStateAppropriation2019"
          :totalStateAppropriation2020="totalStateAppropriation2020"
          :totalStateAppropriation2025="totalStateAppropriation2025"

          :totalTuitionFees2016="totalTuitionFees2016"
          :totalTuitionFees2018="totalTuitionFees2018"
          :totalTuitionFees2019="totalTuitionFees2019"
          :totalTuitionFees2020="totalTuitionFees2020"
          :totalTuitionFees2025="totalTuitionFees2025"
        ></graph>
        <appropriations-graph
          :stateAppropriationPerFTE2016="stateAppropriationPerFTE2016"
          :stateAppropriationPerFTE2018="stateAppropriationPerFTE2018"
          :stateAppropriationPerFTE2019="stateAppropriationPerFTE2019"
          :stateAppropriationPerFTE2020="stateAppropriationPerFTE2020"
          :stateAppropriationPerFTE2025="stateAppropriationPerFTE2025"
        ></appropriations-graph>
      </div>
    </div>
  </div>
</template>

<script>
import Spreadsheet from './components/Spreadsheet'
import ResetButton from './components/ResetButton'
import ShareButton from './components/ShareButton'
import Graph from './components/Graph'
import AppropriationsGraph from './components/AppropriationsGraph'
import _ from 'lodash'

export default {
  name: 'app',
  components: {
    Spreadsheet,
    ResetButton,
    ShareButton,
    Graph,
    AppropriationsGraph
  },
  // Here, we want to initialize the state of the Store
  // from parameters present in the URL (if present).
  created () {
    this.restoreValuesFromUrl([
      'studentFtePercentChange',
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
    studentFte2016: 19229,
    studentFtePercentChangeStart: 2,
    studentFtePercentChangeMin: -5,
    studentFtePercentChangeMax: 5,

    tuitionFeesFTE2016: 6806,
    tuitionFeesFTE2018start: 7000,
    tuitionFeesFTE2018Min: 5000,
    tuitionFeesFTE2018Max: 15000,
    tuitionFeesFTE2019start: 7500,
    tuitionFeesFTE2019Min: 5000,
    tuitionFeesFTE2019Max: 15000,
    tuitionFeesFTE2020start: 8000,
    tuitionFeesFTE2020Min: 5000,
    tuitionFeesFTE2020Max: 15000,
    tuitionFeesFTE2025start: 10089,
    tuitionFeesFTE2025Min: 5000,
    tuitionFeesFTE2025Max: 15000,

    totalStateAppropriation2016: 350,
    totalStateAppropriation2018Min: 200,
    totalStateAppropriation2018Max: 500,
    totalStateAppropriation2018start: 340,
    totalStateAppropriation2019Min: 200,
    totalStateAppropriation2019Max: 500,
    totalStateAppropriation2019start: 330,
    totalStateAppropriation2020Min: 200,
    totalStateAppropriation2020Max: 500,
    totalStateAppropriation2020start: 323,
    totalStateAppropriation2025Min: 200,
    totalStateAppropriation2025Max: 500,
    totalStateAppropriation2025start: 318,

    totalTuitionFees2016: 130.9,

    revenueEducationCost2016: 480.9
  }),
  computed: {
    studentFte2018 () { return this.interpolateStudentFte(2018) },
    studentFte2019 () { return this.interpolateStudentFte(2019) },
    studentFte2020 () { return this.interpolateStudentFte(2020) },
    studentFte2025 () { return this.interpolateStudentFte(2025) },
    studentFtePercentChange () { return this.$store.state.studentFtePercentChange },

    tuitionFeesFTE2018 () { return this.$store.state.tuitionFeesFTE2018 },
    tuitionFeesFTE2019 () { return this.$store.state.tuitionFeesFTE2019 },
    tuitionFeesFTE2020 () { return this.$store.state.tuitionFeesFTE2020 },
    tuitionFeesFTE2025 () { return this.$store.state.tuitionFeesFTE2025 },

    totalStateAppropriation2018 () { return this.$store.state.totalStateAppropriation2018 },
    totalStateAppropriation2019 () { return this.$store.state.totalStateAppropriation2019 },
    totalStateAppropriation2020 () { return this.$store.state.totalStateAppropriation2020 },
    totalStateAppropriation2025 () { return this.$store.state.totalStateAppropriation2025 },

    stateAppropriationPerFTE2016 () { return this.computeStateAppropriationPerFTE(this.studentFte2016, this.totalStateAppropriation2016) },
    stateAppropriationPerFTE2018 () { return this.computeStateAppropriationPerFTE(this.studentFte2018, this.totalStateAppropriation2018) },
    stateAppropriationPerFTE2019 () { return this.computeStateAppropriationPerFTE(this.studentFte2019, this.totalStateAppropriation2019) },
    stateAppropriationPerFTE2020 () { return this.computeStateAppropriationPerFTE(this.studentFte2020, this.totalStateAppropriation2020) },
    stateAppropriationPerFTE2025 () { return this.computeStateAppropriationPerFTE(this.studentFte2025, this.totalStateAppropriation2025) },

    totalTuitionFees2018: function () { return this.computeTotalTuitionFees(this.tuitionFeesFTE2018, this.studentFte2018) },
    totalTuitionFees2019: function () { return this.computeTotalTuitionFees(this.tuitionFeesFTE2019, this.studentFte2019) },
    totalTuitionFees2020: function () { return this.computeTotalTuitionFees(this.tuitionFeesFTE2020, this.studentFte2020) },
    totalTuitionFees2025: function () { return this.computeTotalTuitionFees(this.tuitionFeesFTE2025, this.studentFte2025) },

    revenueEducationCost2018: function () { return this.computeRevenueEducationCost(this.totalTuitionFees2018, this.totalStateAppropriation2018) },
    revenueEducationCost2019: function () { return this.computeRevenueEducationCost(this.totalTuitionFees2019, this.totalStateAppropriation2019) },
    revenueEducationCost2020: function () { return this.computeRevenueEducationCost(this.totalTuitionFees2020, this.totalStateAppropriation2020) },
    revenueEducationCost2025: function () { return this.computeRevenueEducationCost(this.totalTuitionFees2025, this.totalStateAppropriation2025) }
  },
  methods: {
    computeStateAppropriationPerFTE (fte, appropriation) {
      return parseFloat((parseFloat(appropriation) * 1000000 / parseFloat(fte)).toFixed(2))
    },
    computeRevenueEducationCost (tuition, appropriation) {
      console.log(tuition, appropriation)
      return parseFloat((parseFloat(tuition) + parseFloat(appropriation)).toFixed(2))
    },
    computeTotalTuitionFees (fees, fte) {
      return parseFloat(((fees * fte) / 1000000).toFixed(2))
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
    // Returns a compounded interest calculation for student FTE
    interpolateStudentFte (year) {
      // v = p(1+r)^y
      var rate = parseFloat(this.studentFtePercentChange)
      var r = 1 + (rate * 0.01)
      var y = year - 2016
      return Math.floor(this.studentFte2016 * r ** y)
    },
    // Basic validation to check type safety,
    validate (item, value) {
      var validated = parseInt(value)
      if (_.isNaN(validated) === true) {
        validated = 0
      }

      // If validated was not a valid number, we will set the value
      // to the item's minimum value.
      if (validated >= this[item + 'Min'] && validated <= this[item + 'Max']) {
        return validated
      } else if (validated < this[item + 'Min']) {
        return this[item + 'Min']
      } else {
        return this[item + 'Max']
      }
    },
    updated: function (item, value) {
      this.setStoreValue(item, value)
      this.$router.push({
        name: 'edited',
        params: {
          studentFtePercentChange: this.studentFtePercentChange,
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
    },
    resetDefaults (items) {
      this.$store.commit('reset')
    }
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Lato:400,300,700);

#reset, #share {
  display: inline;
}

* {
  font-family: Lato;
}
</style>
