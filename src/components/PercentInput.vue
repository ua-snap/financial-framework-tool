<template>
  <label for="percent-input">
    <input
      class="input"
      id="percent-input"
      v-model:value="value"
    /> %
  </label>
</template>

<script>
export default {
  name: 'percent-input',
  props: ['id', 'min', 'max', 'start', 'currvalue'],
  data: () => ({
    value: undefined
  }),
  created () {
    this.value = this.currvalue
  }
}
</script>

<style scoped>
input.input {
  text-align: right;
}
</style>
