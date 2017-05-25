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
              min="10000"
              max="35000"
              :start="studentFte2025"
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
              min="5000"
              max="15000"
              :start="tuitionFeesFTE2025"
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
              min="8000"
              max="20000"
              :start="stateAppropriationFTE2025"
              v-on:updated="updated"
            ></slider-input>
          </td>
        </tr>
        <tr>
          <th scope="row">Total Tuition &amp; Fees (Million $)</th>
          <td>{{ totalTuitionFees2016 }}</td>
          <td>{{ totalTuitionFees2025 }}</td>
        </tr>
        <tr>
          <th scope="row">Total State Appropriation (Million $)</th>
          <td>{{ totalStateAppropriation2016 }}</td>
          <td>{{ totalStateAppropriation2025 }}</td>
        </tr>
        <tr>
          <th scope="row">Revenue, Educational Cost (Million $)</th>
          <td>{{ revenueEducationCost2016 }}</td>
          <td>{{ revenueEducationCost2025 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SliderInput from './SliderInput'

export default {
  name: 'spreadsheet',
  components: {
    SliderInput
  },
  props: [
    'studentFte2016',
    'studentFte2025',
    'tuitionFeesFTE2016',
    'tuitionFeesFTE2025',
    'stateAppropriationFTE2016',
    'stateAppropriationFTE2025',
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
