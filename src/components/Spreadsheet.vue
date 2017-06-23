<template>
  <div class="spreadsheet">
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">2016</th>
          <th scope="col">FY2018</th>
          <th scope="col">FY2019</th>
          <th scope="col">FY2020</th>
          <th scope="col">FY2025</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Student FTE</th>
          <td>{{ studentFte2016 }}</td>
          <td>{{ studentFte2018 }}</td>
          <td>{{ studentFte2019 }}</td>
          <td>{{ studentFte2020 }}</td>
          <td>{{ studentFte2025 }}</td>
        </tr>
        <tr>
          <th scope="row">% change FTE per year</th>
          <td colspan="5">
            <percent-input
              :min="-50"
              :max="50"
              :start="2"
              :currvalue="studentFtePercentChange"
              v-on:updated="updated"
            ></percent-input>
          </td>
        <tr>
          <th scope="row">Tuition and Fees per Student FTE</th>
          <td>
            {{ tuitionFeesFTE2016 }}
          </td>
          <td>
            <slider-input
              id="tuitionFeesFTE2018"
              :min="tuitionFeesFTE2018min"
              :max="tuitionFeesFTE2018max"
              :start="tuitionFeesFTE2018start"
              :currvalue="tuitionFeesFTE2018"
              v-on:updated="updated"
            ></slider-input>
          </td>
          <td>
            <slider-input
              id="tuitionFeesFTE2019"
              :min="tuitionFeesFTE2019min"
              :max="tuitionFeesFTE2019max"
              :start="tuitionFeesFTE2019start"
              :currvalue="tuitionFeesFTE2019"
              v-on:updated="updated"
            ></slider-input>
          </td>
          <td>
            <slider-input
              id="tuitionFeesFTE2020"
              :min="tuitionFeesFTE2020min"
              :max="tuitionFeesFTE2020max"
              :start="tuitionFeesFTE2020start"
              :currvalue="tuitionFeesFTE2020"
              v-on:updated="updated"
            ></slider-input>
          </td>
          <td>
            <slider-input
              id="tuitionFeesFTE2025"
              :min="tuitionFeesFTE2025min"
              :max="tuitionFeesFTE2025max"
              :start="tuitionFeesFTE2025start"
              :currvalue="tuitionFeesFTE2025"
              v-on:updated="updated"
            ></slider-input>
          </td>
        </tr>
        <tr>
          <th scope="row">Total State Appropriation (Million $)</th>
          <td>
            {{ totalStateAppropriation2016 }}
          </td>
          <td>
            <slider-input
              id="totalStateAppropriation2018"
              :min="totalStateAppropriation2018min"
              :max="totalStateAppropriation2018max"
              :start="totalStateAppropriation2018start"
              :currvalue="totalStateAppropriation2018"
              v-on:updated="updated"
            ></slider-input>
          </td>
          <td>
            <slider-input
              id="totalStateAppropriation2019"
              :min="totalStateAppropriation2019min"
              :max="totalStateAppropriation2019max"
              :start="totalStateAppropriation2019start"
              :currvalue="totalStateAppropriation2019"
              v-on:updated="updated"
            ></slider-input>
          </td>
          <td>
            <slider-input
              id="totalStateAppropriation2020"
              :min="totalStateAppropriation2020min"
              :max="totalStateAppropriation2020max"
              :start="totalStateAppropriation2020start"
              :currvalue="totalStateAppropriation2020"
              v-on:updated="updated"
            ></slider-input>
          </td>
          <td>
            <slider-input
              id="totalStateAppropriation2025"
              :min="totalStateAppropriation2025min"
              :max="totalStateAppropriation2025max"
              :start="totalStateAppropriation2025start"
              :currvalue="totalStateAppropriation2025"
              v-on:updated="updated"
            ></slider-input>
          </td>
        </tr>
        <tr>
          <th scope="row">State Appropriation per FTE</th>
          <td>{{ stateAppropriationPerFTE2016 }}</td>
          <td>
            {{ stateAppropriationPerFTE2018 }}
          </td>
          <td>
            {{ stateAppropriationPerFTE2019 }}
          </td>
          <td>
            {{ stateAppropriationPerFTE2020 }}
          </td>
          <td>
            {{ stateAppropriationPerFTE2025 }}
            <percent-change
              :value="stateAppropriationPerFTE2025"
            ></percent-change>
          </td>
        </tr>
        <tr>
          <th scope="row">Total Tuition &amp; Fees (Million $)</th>
          <td>{{ totalTuitionFees2016 }}</td>
          <td>
            {{ totalTuitionFees2018 }}
          </td>
          <td>
            {{ totalTuitionFees2019 }}
          </td>
          <td>
            {{ totalTuitionFees2020 }}
          </td>
          <td>
            {{ totalTuitionFees2025 }}
            <percent-change
              :value="totalTuitionFees2025"
            ></percent-change>
          </td>
        </tr>
        <tr>
          <th scope="row">Revenue, Educational Cost (Million $)</th>
          <td>{{ revenueEducationCost2016 }}</td>
          <td>
            {{ revenueEducationCost2018 }}
          </td>
          <td>
            {{ revenueEducationCost2019 }}
          </td>
          <td>
            {{ revenueEducationCost2020 }}
          </td>
          <td>
            {{ revenueEducationCost2025 }}
            <percent-change
              :value="revenueEducationCost2025"
            ></percent-change>
          </td>
        </tr>
      </tbody>
    </table>

    <reset-button
      id="reset"
      v-on:resetdefaults="resetDefaults"
    ></reset-button>
  </div>
</template>

<script>
import SliderInput from './SliderInput'
import PercentChange from './PercentChange'
import ResetButton from './ResetButton'
import PercentInput from './PercentInput'

export default {
  name: 'spreadsheet',
  components: {
    SliderInput,
    PercentChange,
    ResetButton,
    PercentInput
  },
  props: [
    'studentFte2016',
    'studentFte2018',
    'studentFte2019',
    'studentFte2020',
    'studentFte2025',
    'studentFte2025start',
    'studentFte2025min',
    'studentFte2025max',
    'studentFtePercentChange',

    'tuitionFeesFTE2016',
    'tuitionFeesFTE2018',
    'tuitionFeesFTE2018start',
    'tuitionFeesFTE2018min',
    'tuitionFeesFTE2018max',
    'tuitionFeesFTE2019',
    'tuitionFeesFTE2019start',
    'tuitionFeesFTE2019min',
    'tuitionFeesFTE2019max',
    'tuitionFeesFTE2020',
    'tuitionFeesFTE2020start',
    'tuitionFeesFTE2020min',
    'tuitionFeesFTE2020max',
    'tuitionFeesFTE2025',
    'tuitionFeesFTE2025start',
    'tuitionFeesFTE2025min',
    'tuitionFeesFTE2025max',

    'totalStateAppropriation2016',
    'totalStateAppropriation2018',
    'totalStateAppropriation2018start',
    'totalStateAppropriation2018min',
    'totalStateAppropriation2018max',
    'totalStateAppropriation2019',
    'totalStateAppropriation2019start',
    'totalStateAppropriation2019min',
    'totalStateAppropriation2019max',
    'totalStateAppropriation2020',
    'totalStateAppropriation2020start',
    'totalStateAppropriation2020min',
    'totalStateAppropriation2020max',
    'totalStateAppropriation2025',
    'totalStateAppropriation2025start',
    'totalStateAppropriation2025min',
    'totalStateAppropriation2025max',

    'stateAppropriationPerFTE2016',
    'stateAppropriationPerFTE2018',
    'stateAppropriationPerFTE2019',
    'stateAppropriationPerFTE2020',
    'stateAppropriationPerFTE2025',

    'totalTuitionFees2016',
    'totalTuitionFees2018',
    'totalTuitionFees2019',
    'totalTuitionFees2020',
    'totalTuitionFees2025',

    'revenueEducationCost2016',
    'revenueEducationCost2018',
    'revenueEducationCost2019',
    'revenueEducationCost2020',
    'revenueEducationCost2025'
  ],
  methods: {
    updated: function (item, value) {
      this.$emit('updated', item, value)
    },
    resetDefaults: function (item, value) {
      this.$emit('resetdefaults')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table.table>tbody>tr>td {
  padding: 1ex 1em;
}
</style>
