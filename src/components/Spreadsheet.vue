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
          <td><slider-input
              id="studentFte2016"
              min="5000"
              max="25000"
              :start="studentFte2016"
              v-on:updated="updated"
            ></slider-input></td>
          <td>{{ studentFte2025 }}</td>
        </tr>
        <tr>
          <th scope="row">Tuition &amp; Fees Per Student ($)</th>
          <td>{{ tuitionFeesPerStudent2016 }}</td>
          <td>{{ tuitionFeesPerStudent2025 }}</td>
        </tr>
        <tr>
          <th scope="row">Tuition and Fees</th>
          <td>{{ tuitionFees2016 }}</td>
          <td>{{ tuitionFees2025 }}</td>
        </tr>
        <tr>
          <th scope="row">State Appropriation</th>
          <td>
            <slider-input
              id="stateAppropriation2016"
              min="200"
              max="500"
              :start="stateAppropriation2016"
              v-on:updated="updated"
            ></slider-input>
          </td>
          <td>
            <slider-input
              id="stateAppropriation2025"
              min="200"
              max="500"
              :start="stateAppropriation2025"
              v-on:updated="updated"
            ></slider-input>
          </td>
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
    'tuitionFeesPerStudent2016',
    'tuitionFeesPerStudent2025',
    'tuitionFees2016',
    'tuitionFees2025',
    'stateAppropriation2016',
    'stateAppropriation2025',
    'revenueEducationCost2016',
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
</style>
