<template>
  <span v-show="ifShow" v-bind:class="{ positive: isPositive }">{{ percentChangeText }}</span>
</template>

<script>
export default {
  name: 'percent-change',
  data: function () {
    return {
      startValue: undefined
    }
  },
  props: [
    'value',
    'start'
  ],
  created: function () {
    this.startValue = this.start
  },
  computed: {
    percentChange: function () {
      return (((this.value / this.startValue) - 1) * 100).toFixed(1)
    },
    percentChangeText: function () {
      if (this.percentChange === 0 || isNaN(this.percentChange)) { return '' }
      var sign = (this.percentChange > 0) ? '+' : ''
      return sign + this.percentChange + '%'
    },
    isPositive: function () {
      return this.percentChange > 0
    },
    ifShow: function () {
      return Math.abs(this.percentChange) > 1
    }
  }
}
</script>

<style scoped>
  span {
    display: inline-block;
    padding-left: 1ex;
    font-style: italic;
    font-weight: bold;
    color: #E3593D;
  }
  .positive {
    color: #13AD1B;
  }
</style>
