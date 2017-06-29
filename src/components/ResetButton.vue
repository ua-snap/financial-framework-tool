<template>
  <div>
    <button
      class="btn btn-primary"
      type="submit"
      v-on:click="resetDefaults"
    >Reset</button>
  </div>
</template>

<script>

export default {
  name: 'reset-button',
  methods: {
    resetDefaults: function () {
      this.$emit('resetdefaults')
    }
  }
}
</script>

<style>
</style>
