<template>
  <div class="graph">
    <div id="graph1"></div>
  </div>
</template>

<script>
import _ from 'lodash'

// Returns an linear interpolated value for the specified
// y1/y2 values with x in the range of 2021-2024.
// this = x
var interpolate = function (y1, y2, dx, s) {
  y1 = parseFloat(y1, 2)
  y2 = parseFloat(y2, 2)
  var x = parseInt(this)
  return Math.round(((y2 - y1) / dx) * (x - s) + y1)
}

// Defined for reuse throughout the component
var xAxisLabels = [2016, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]

export default {
  name: 'graph',
  props: [
    'totalTuitionFees2016',
    'totalTuitionFees2018',
    'totalTuitionFees2019',
    'totalTuitionFees2020',
    'totalTuitionFees2025',
    'totalStateAppropriation2016',
    'totalStateAppropriation2018',
    'totalStateAppropriation2019',
    'totalStateAppropriation2020',
    'totalStateAppropriation2025',
    'studentFte2016',
    'studentFte2018',
    'studentFte2019',
    'studentFte2020',
    'studentFte2025'
  ],
  watch: {
    totalTuitionFees2016: function () { this.refreshPlot() },
    totalTuitionFees2018: function () { this.refreshPlot() },
    totalTuitionFees2019: function () { this.refreshPlot() },
    totalTuitionFees2020: function () { this.refreshPlot() },
    totalTuitionFees2025: function () { this.refreshPlot() },
    totalStateAppropriation2016: function () { this.refreshPlot() },
    totalStateAppropriation2018: function () { this.refreshPlot() },
    totalStateAppropriation2019: function () { this.refreshPlot() },
    totalStateAppropriation2020: function () { this.refreshPlot() },
    totalStateAppropriation2025: function () { this.refreshPlot() },
    studentFte2025: function () { this.refreshPlot() }
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
        title: 'Enrollment, Tuition & Fees, State Appropriations',
        barmode: 'stack',
        margin: {
          l: 60,
          r: 60,
          b: 60,
          t: 60
        },
        xaxis: {
          type: 'category'
        },
        yaxis: {
          title: 'Million $',
          range: [0, 700]
        },
        yaxis2: {
          title: 'Enrollment (FTE)',
          side: 'right',
          overlaying: 'y',
          range: [10000, 30000],
          hoverformat: ',.'
        },
        legend: {
          orientation: 'h',
          font: {
            family: 'Lato'
          }
        }
      }
    },
    processData: function (field, y1, y2) {
      var data = _.concat(
        this[field + '2016'],
        this[field + '2018'],
        this[field + '2019'],
        this[field + '2020'],
        _.invokeMap(
          [2021, 2022, 2023, 2024],
          interpolate,
          this[field + '2020'],
          this[field + '2025'],
          5,
          2020
        ),
        this[field + '2025']
      )
      return data
    },
    getGraphData: function () {
      return [
        {
          x: xAxisLabels,
          y: this.processData(
            'totalStateAppropriation',
            this.totalStateAppropriation2020,
            this.totalStateAppropriation2025
          ),
          name: 'Appropriations',
          type: 'bar',
          marker: {
            color: '#4575B5'
          }
        },
        {
          x: xAxisLabels,
          y: this.processData(
            'totalTuitionFees',
            this.totalTuitionFees2020,
            this.totalTuitionFees2025
          ),
          name: 'Tuition & Fees',
          type: 'bar',
          marker: {
            color: '#E3593D'
          }
        },
        {
          x: xAxisLabels,
          y: this.processData(
            'studentFte',
            this.studentFte2020,
            this.studentFte2025
          ),
          name: 'Enrollment',
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
