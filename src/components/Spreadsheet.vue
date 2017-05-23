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
          <td>
          <input
            ref="input"
            v-bind:value="stateAppropriation2016"
            v-on:input="updateValue($event)"
          >
          <!-- ID of slider element is used to tie to prop on parent to be updated -->
          <input
            id="stateAppropriation2016"
            data-slider-id="stateAppropriation2016Slider"
            class="slider"
            type="text"
            data-slider-min="200"
            data-slider-max="500"
            data-slider-step="1"
            data-slider-value="350"
          />
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
    /* eslint no-unused-vars: 0 */
    var self = this
    var sliderValueHandler = function (event) {
      self.$emit('update:' + event.currentTarget.id, event.value)
    }
    $(document).ready(function () {
      $('input.slider')
        .slider()
        .on('slide', sliderValueHandler)
    })
  },
  methods: {
    updateValue: function (event) {
      console.log(event)
      this.$emit('update:stateAppropriation2016', event.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
