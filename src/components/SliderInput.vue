<template>
    <div class="sliderInput">
      <input
        ref="input"
        v-model:value="value"
        v-on:input="updateValue($event.target.value)"
      >
      <input
        v-bind:id="id"
        class="slider"
        type="text"
        v-bind:data-slider-min="min"
        v-bind:data-slider-max="max"
        data-slider-step="1"
        v-bind:data-slider-value="start"
      />
    </div>
</template>

<script>
import Slider from '../../node_modules/bootstrap-slider'

export default {
  name: 'slider-input',
  props: ['id', 'min', 'max', 'start'],
  data: () => ({
    value: undefined
  }),
  created () {
    // Synchronize local data with parent prop
    this.value = this.start
  },
  mounted () {
    var self = this
    self.slider = new Slider('#' + self.id, {
      ticks: [this.min, this.start, this.max]
    })
    self.slider.on('slide', function (value) {
      self.value = value
      self.$emit('updated', self.id, value)
    })
  },
  methods: {
    updateValue: function (value) {
      value = parseInt(value)
      if (value > this.max) {
        value = this.max
      } else if (value < this.min) {
        value = this.min
      }
      this.value = value
      this.slider.setValue(value)
      this.$emit('updated', this.id, value)
    }
  }
}
</script>
