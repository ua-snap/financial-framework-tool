<template>
  <div>
    <div class="form-group" v-bind:class="{ 'form-group--error': $v.value.$error } ">
      <input
        ref="input"
        class="form__input"
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
        data-slider-step="1"
        v-bind:data-slider-value="start"
      />
    </div>
    <span class="form-group__message" v-if="!$v.value.between">Must be between {{$v.value.$params.between.min}} and {{$v.value.$params.between.max}}</span>
  </div>
</template>

<script>
// @blur="$v.value.$touch()"
// v-on:input="updateValue($event.target.value)"
import Slider from '../../node_modules/bootstrap-slider'
import _ from 'lodash'
import { between } from 'vuelidate/lib/validators'

export default {
  name: 'slider-input',
  props: ['id', 'min', 'max', 'start', 'currvalue'],
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
      ticks: [this.min, this.start, this.max]
    })
    self.slider.on('slide', function (value) {
      self.value = value
      self.$emit('updated', self.id, value)
    })
    self.slider.setValue(this.value)
  },
  validations: {
    value: {
      between (value) {
        if (_.isNaN(parseInt(value))) { return false }
        return between(this.min, this.max)(value)
      }
    }
  },
  methods: {
    updateValue: function (value, between) {
      value = parseInt(value)
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
  }
}
</script>
