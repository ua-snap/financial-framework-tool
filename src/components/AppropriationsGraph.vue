<template>
  <div class="graph">
    <div id="graph2"></div>
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
  return ((y2 - y1) / dx) * (x - s) + y1
}

// Defined for reuse throughout the component
var xAxisLabels = [2016, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]

export default {
  name: 'appropriations-graph',
  props: [
    'stateAppropriationPerFTE2016',
    'stateAppropriationPerFTE2018',
    'stateAppropriationPerFTE2019',
    'stateAppropriationPerFTE2020',
    'stateAppropriationPerFTE2025'
  ],
  watch: {
    stateAppropriationPerFTE2016: function () { this.refreshPlot() },
    stateAppropriationPerFTE2018: function () { this.refreshPlot() },
    stateAppropriationPerFTE2019: function () { this.refreshPlot() },
    stateAppropriationPerFTE2020: function () { this.refreshPlot() },
    stateAppropriationPerFTE2025: function () { this.refreshPlot() }
  },
  mounted () {
    this.graph = document.getElementById('graph2')
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
        title: 'State Appropriations per FTE',
        margin: {
          l: 60,
          r: 60,
          b: 60,
          t: 60
        },
        barmode: 'stack',
        xaxis: {
          type: 'category'
        },
        yaxis: {
          title: 'Thousand $',
          range: [10000, 20000]
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
            'stateAppropriationPerFTE',
            this.stateAppropriationPerFTE2020,
            this.stateAppropriationPerFTE2025
          ),
          name: 'State Appropriations per FTE',
          type: 'bar',
          marker: {
            color: '#13AD1B'
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
