<template>
  <div class="graph">
    <div id="graph1"></div>
  </div>
</template>

<script>

export default {
  name: 'graph',
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
  watch: {
    stateAppropriation2016: function () { this.refreshPlot() },
    stateAppropriation2025: function () { this.refreshPlot() }
  },
  mounted () {
    this.graph = document.getElementById('graph1')
    this.drawPlot()
  },
  methods: {
    calcInterp: function (a, b) {
      return (a + b) / 2
    },
    drawPlot: function () {
      window.Plotly.plot(this.graph, this.getGraphData(), this.getGraphLayout())
    },
    getGraphLayout: function () {
      return {
        barmode: 'stack'
      }
    },
    getGraphData: function () {
      return [
        {
          x: ['2016', '2025'],
          y: [this.stateAppropriation2016, this.stateAppropriation2025],
          name: 'State Appropriations',
          type: 'bar'
        },
        {
          x: ['2016', '2025'],
          y: [this.revenueEducationCost2016, this.revenueEducationCost2025],
          name: 'Revenue',
          type: 'bar'
        }
      ]
    },
    refreshPlot: function () {
      this.graph.data = this.getGraphData()
      window.Plotly.redraw(this.graph)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #graph1 {
    height: 400px;
  }
</style>
