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
          <td>{{ studentFte2016 | money }}</td>
          <td>{{ studentFte2018 | money }}</td>
          <td>{{ studentFte2019 | money }}</td>
          <td>{{ studentFte2020 | money }}</td>
          <td>{{ studentFte2025 | money }}</td>
        </tr>
        <tr>
          <th scope="row">% change FTE per year</th>
          <td colspan="5">
            <slider-input
              id="studentFtePercentChange"
              class="fte-percent-change"
              :min="studentFtePercentChangeMin"
              :max="studentFtePercentChangeMax"
              :start="studentFtePercentChangeStart"
              :currvalue="studentFtePercentChange"
              :step="0.1"
              v-on:updated="updated"
            ></slider-input>
          </td>
        <tr>
          <th scope="row">Tuition and Fees per Student FTE ($)</th>
          <td>
            {{ tuitionFeesFTE2016 | money }}
          </td>
          <td>
            <slider-input
              id="tuitionFeesFTE2018"
              :min="tuitionFeesFTE2018Min"
              :max="tuitionFeesFTE2018Max"
              :start="tuitionFeesFTE2018start"
              :currvalue="tuitionFeesFTE2018"
              :step="1"
              v-on:updated="updated"
            ></slider-input>
          </td>
          <td>
            <slider-input
              id="tuitionFeesFTE2019"
              :min="tuitionFeesFTE2019Min"
              :max="tuitionFeesFTE2019Max"
              :start="tuitionFeesFTE2019start"
              :currvalue="tuitionFeesFTE2019"
              v-on:updated="updated"
            ></slider-input>
          </td>
          <td>
            <slider-input
              id="tuitionFeesFTE2020"
              :min="tuitionFeesFTE2020Min"
              :max="tuitionFeesFTE2020Max"
              :start="tuitionFeesFTE2020start"
              :currvalue="tuitionFeesFTE2020"
              v-on:updated="updated"
            ></slider-input>
          </td>
          <td>
            <slider-input
              id="tuitionFeesFTE2025"
              :min="tuitionFeesFTE2025Min"
              :max="tuitionFeesFTE2025Max"
              :start="tuitionFeesFTE2025start"
              :currvalue="tuitionFeesFTE2025"
              v-on:updated="updated"
            ></slider-input>
          </td>
        </tr>
        <tr>
          <th scope="row">Total State Appropriation (Million $)</th>
          <td>
            {{ totalStateAppropriation2016 | money }}
          </td>
          <td>
            <slider-input
              id="totalStateAppropriation2018"
              :min="totalStateAppropriation2018Min"
              :max="totalStateAppropriation2018Max"
              :start="totalStateAppropriation2018start"
              :currvalue="totalStateAppropriation2018"
              v-on:updated="updated"
            ></slider-input>
          </td>
          <td>
            <slider-input
              id="totalStateAppropriation2019"
              :min="totalStateAppropriation2019Min"
              :max="totalStateAppropriation2019Max"
              :start="totalStateAppropriation2019start"
              :currvalue="totalStateAppropriation2019"
              v-on:updated="updated"
            ></slider-input>
          </td>
          <td>
            <slider-input
              id="totalStateAppropriation2020"
              :min="totalStateAppropriation2020Min"
              :max="totalStateAppropriation2020Max"
              :start="totalStateAppropriation2020start"
              :currvalue="totalStateAppropriation2020"
              v-on:updated="updated"
            ></slider-input>
          </td>
          <td>
            <slider-input
              id="totalStateAppropriation2025"
              :min="totalStateAppropriation2025Min"
              :max="totalStateAppropriation2025Max"
              :start="totalStateAppropriation2025start"
              :currvalue="totalStateAppropriation2025"
              v-on:updated="updated"
            ></slider-input>
          </td>
        </tr>
        <tr>
          <th scope="row">State Appropriation per FTE ($)</th>
          <td>{{ stateAppropriationPerFTE2016 | money }}</td>
          <td>
            {{ stateAppropriationPerFTE2018 | money }}
          </td>
          <td>
            {{ stateAppropriationPerFTE2019 | money }}
          </td>
          <td>
            {{ stateAppropriationPerFTE2020 | money }}
          </td>
          <td>
            {{ stateAppropriationPerFTE2025 | money }}
          </td>
        </tr>
        <tr>
          <th scope="row">Total Tuition &amp; Fees (Million $)</th>
          <td>{{ totalTuitionFees2016 | money }}</td>
          <td>
            {{ totalTuitionFees2018 | money }}
          </td>
          <td>
            {{ totalTuitionFees2019 | money }}
          </td>
          <td>
            {{ totalTuitionFees2020 | money }}
          </td>
          <td>
            {{ totalTuitionFees2025 | money }}
          </td>
        </tr>
        <tr>
          <th scope="row">Revenue, Educational Cost (Million $)</th>
          <td>{{ revenueEducationCost2016 | money }}</td>
          <td>
            {{ revenueEducationCost2018 | money }}
          </td>
          <td>
            {{ revenueEducationCost2019 | money }}
          </td>
          <td>
            {{ revenueEducationCost2020 | money }}
          </td>
          <td>
            {{ revenueEducationCost2025 | money }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SliderInput from './SliderInput'
import ResetButton from './ResetButton'
import ShareButton from './ShareButton'

export default {
  name: 'spreadsheet',
  components: {
    SliderInput,
    ShareButton,
    ResetButton
  },
  filters: {
    // Our money filter returns rounded value, with comma-grouping
    money: function (value) {
      return Math.round(value).toLocaleString()
    }
  },
  props: [
    'studentFte2016',
    'studentFte2018',
    'studentFte2019',
    'studentFte2020',
    'studentFte2025',
    'studentFtePercentChange',
    'studentFtePercentChangeStart',
    'studentFtePercentChangeMin',
    'studentFtePercentChangeMax',

    'tuitionFeesFTE2016',
    'tuitionFeesFTE2018',
    'tuitionFeesFTE2018start',
    'tuitionFeesFTE2018Min',
    'tuitionFeesFTE2018Max',
    'tuitionFeesFTE2019',
    'tuitionFeesFTE2019start',
    'tuitionFeesFTE2019Min',
    'tuitionFeesFTE2019Max',
    'tuitionFeesFTE2020',
    'tuitionFeesFTE2020start',
    'tuitionFeesFTE2020Min',
    'tuitionFeesFTE2020Max',
    'tuitionFeesFTE2025',
    'tuitionFeesFTE2025start',
    'tuitionFeesFTE2025Min',
    'tuitionFeesFTE2025Max',

    'totalStateAppropriation2016',
    'totalStateAppropriation2018',
    'totalStateAppropriation2018start',
    'totalStateAppropriation2018Min',
    'totalStateAppropriation2018Max',
    'totalStateAppropriation2019',
    'totalStateAppropriation2019start',
    'totalStateAppropriation2019Min',
    'totalStateAppropriation2019Max',
    'totalStateAppropriation2020',
    'totalStateAppropriation2020start',
    'totalStateAppropriation2020Min',
    'totalStateAppropriation2020Max',
    'totalStateAppropriation2025',
    'totalStateAppropriation2025start',
    'totalStateAppropriation2025Min',
    'totalStateAppropriation2025Max',

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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table.table>tbody>tr>td, table.table>thead>tr>th {
  padding: 1ex 1em;
}
</style>
