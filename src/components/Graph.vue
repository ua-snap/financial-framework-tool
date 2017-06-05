<template>
  <div class="graph">
    <div id="graph1"></div>
  </div>
</template>

<script>

export default {
  name: 'graph',
  props: [
    'totalTuitionFees2016',
    'totalTuitionFees2025',
    'totalStateAppropriation2016',
    'totalStateAppropriation2025',
    'studentFte2016',
    'studentFte2025'
  ],
  watch: {
    totalTuitionFees2016: function () { this.refreshPlot() },
    totalTuitionFees2025: function () { this.refreshPlot() },
    totalStateAppropriation2016: function () { this.refreshPlot() },
    totalStateAppropriation2025: function () { this.refreshPlot() }
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
        barmode: 'stack',
        yaxis: {
          title: 'Million $',
          range: [0, 1250]
        },
        yaxis2: {
          title: 'Enrollment (FTE)',
          side: 'right',
          overlaying: 'y',
          range: [10000, 40000]
        },
        legend: {
          x: 1.2,
          font: {
            family: 'Lato'
          }
        }
      }
    },
    getGraphData: function () {
      return [
        {
          x: ['2016', '2025'],
          y: [this.totalStateAppropriation2016, this.totalStateAppropriation2025],
          name: 'State Appropriations',
          type: 'bar',
          marker: {
            color: '#236192'
          }
        },
        {
          x: ['2016', '2025'],
          y: [this.totalTuitionFees2016, this.totalTuitionFees2025],
          name: 'Tuition &amp; Fees',
          type: 'bar',
          marker: {
            color: '#FFCD00'
          }
        },
        {
          x: ['2016', '2025'],
          y: [this.studentFte2016, this.studentFte2025],
          name: 'Enrollment (FTE)',
          yaxis: 'y2',
          type: 'scatter',
          line: {
            color: '#333',
            width: 3
          },
          marker: {
            color: '#000',
            size: 7
          }
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

</style>
