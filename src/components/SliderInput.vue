<template>
  <div>
    <div class="form-group" v-bind:class="{ 'form-group--error': $v.value.$error } ">
      <input
        ref="input"
        class="form__input input"
        v-model:trim="value"
        v-model:value="value"
        v-on:input="updateValue($event.target.value, $v.value.between)"
      >
      <input
        v-bind:id="id"
        class="slider"
        type="text"
        v-bind:data-slider-min="min"
        v-bind:data-slider-max="max"
        v-bind:data-slider-value="start"
      />
    </div>
    <span class="form-group__message" v-if="!$v.value.between">Must be between {{$v.value.$params.between.min}} and {{$v.value.$params.between.max}}</span>
  </div>
</template>

<script>

import Slider from '../../node_modules/bootstrap-slider'
import _ from 'lodash'
import { between } from 'vuelidate/lib/validators'

export default {
  name: 'slider-input',
  props: {
    id: String,
    min: Number,
    max: Number,
    start: Number,
    currvalue: Number,
    step: {
      type: Number,
      default: 1
    }
  },
  data: () => ({
    value: undefined
  }),
  created () {
    // Synchronize local data with parent prop
    this.value = this.currvalue
  },
  mounted () {
    var self = this
    self.slider = new Slider('#' + self.id, {
      step: this.step,
      ticks: [this.min, this.start, this.max],
      tooltip_position: 'bottom'
    })
    self.slider.handle1.removeAttribute('tabindex')
    self.slider.handle2.removeAttribute('tabindex')
    self.slider.on('change', function (values) {
      self.value = values.newValue
      self.$emit('updated', self.id, self.value)
    })
    self.slider.setValue(this.value)
  },
  validations: {
    value: {
      between (value) {
        if (_.isNaN(parseFloat(value))) { return false }
        return between(this.min, this.max)(value)
      }
    }
  },
  methods: {
    updateValue: function (value, between) {
      value = parseFloat(value)
      if (between) {
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
  },
  watch: {
    currvalue: function (newValue) {
      this.value = newValue
      this.slider.setValue(newValue)
    }
  }
}
</script>

<style>
input.input {
  max-width: 6em;
}
.slider.slider-horizontal {
  max-width: 100px;
}
</style>
