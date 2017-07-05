<template>
  <div>
    <button
      class="btn"
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
      this.$router.replace('/')
    }
  }
}
</script>

<style>
</style>
