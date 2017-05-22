<template>
  <div class="graph">
    <p>{{ stateAppropriation2016 }}</p>
  </div>
</template>

<script>
export default {
  name: 'graph',
  props: ['stateAppropriation2016']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .graph {
    display: inline-box;
    min-width: 20em;
    min-height: 20em;
    border: 2px solid #aeeaea;
  }
</style>
