<template>
  <div class="spreadsheet">
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">2016</th>
          <th scope="col">2025</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Current Student Full-Time Equivalents (FTE)</th>
          <td>{{ studentFte2016 }}
          </td>
          <td>
            <slider-input
              id="studentFte2025"
              :min="studentFte2025min"
              :max="studentFte2025max"
              :start="studentFte2025start"
              :currvalue="studentFte2025"
              v-on:updated="updated"
            ></slider-input>
          </td>
        </tr>
        <tr>
          <th scope="row">Tuition and Fees per Student FTE</th>
          <td>
            {{ tuitionFeesFTE2016 }}
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
          <th scope="row">State Appropriation per Student FTE</th>
          <td>
            {{ stateAppropriationFTE2016 }}
          </td>
          <td>
            <slider-input
              id="stateAppropriationFTE2025"
              :min="stateAppropriationFTE2025min"
              :max="stateAppropriationFTE2025max"
              :start="stateAppropriationFTE2025start"
              :currvalue="stateAppropriationFTE2025"
              v-on:updated="updated"
            ></slider-input>
          </td>
        </tr>
        <tr>
          <th scope="row">Total Tuition &amp; Fees (Million $)</th>
          <td>{{ totalTuitionFees2016 }}</td>
          <td>
            {{ totalTuitionFees2025 }}
            <percent-change
              :value="totalTuitionFees2025"
            ></percent-change>
          </td>
        </tr>
        <tr>
          <th scope="row">Total State Appropriation (Million $)</th>
          <td>{{ totalStateAppropriation2016 }}</td>
          <td>
            {{ totalStateAppropriation2025 }}
            <percent-change
              :value="totalStateAppropriation2025"
            ></percent-change>
          </td>
        </tr>
        <tr>
          <th scope="row">Revenue, Educational Cost (Million $)</th>
          <td>{{ revenueEducationCost2016 }}</td>
          <td>
            {{ revenueEducationCost2025 }}
            <percent-change
              :value="revenueEducationCost2025"
            ></percent-change>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SliderInput from './SliderInput'
import PercentChange from './PercentChange'

export default {
  name: 'spreadsheet',
  components: {
    SliderInput,
    PercentChange
  },
  props: [
    'studentFte2016',
    'studentFte2025',
    'studentFte2025start',
    'studentFte2025min',
    'studentFte2025max',
    'tuitionFeesFTE2016',
    'tuitionFeesFTE2025',
    'tuitionFeesFTE2025start',
    'tuitionFeesFTE2025min',
    'tuitionFeesFTE2025max',
    'stateAppropriationFTE2016',
    'stateAppropriationFTE2025',
    'stateAppropriationFTE2025start',
    'stateAppropriationFTE2025min',
    'stateAppropriationFTE2025max',
    'totalTuitionFees2016',
    'totalTuitionFees2025',
    'revenueEducationCost2016',
    'revenueEducationCost2025',
    'totalStateAppropriation2016',
    'totalStateAppropriation2025'
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
</style>
