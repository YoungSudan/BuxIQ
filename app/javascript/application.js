// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import 'flowbite';
import ApexCharts from 'apexcharts'
//import './plaid-auth'

var options = {
  chart: {
    type: 'bar', 
    height: 750,
    width: "100%"
  },
  series: [
    {
      name: 'sales',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }
  ],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  }
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()

console.log("CHARTS")
