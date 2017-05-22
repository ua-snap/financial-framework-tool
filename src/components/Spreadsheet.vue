<template>
  <div class="spreadsheet">
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">2016</th>
          <th scope="col">2025></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Current Student Full-Time Equivalents (FTE)</th>
          <td>{{ studentFte2016 }}</td>
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
          <td><input
            ref="input"
            v-bind:value="stateAppropriation2016"
            v-on:input="updateValue($event.target.value)"
          >
          <input id="ex1" data-slider-id='ex1Slider' type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="14"/>
          </td>
          <td>{{ stateAppropriation2025 }}</td>
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
var $ = window.$

export default {
  name: 'spreadsheet',
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
  mounted () {
    console.log('mounted')
    $(document).ready(function () {
      $('#ex1').slider(
        {
          formatter: function (value) {
            return 'Current value: ' + value
          }
        }
      )
    })
  },
  methods: {
    updateValue: function (value) {
      this.$emit('update:stateAppropriation2016', value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
