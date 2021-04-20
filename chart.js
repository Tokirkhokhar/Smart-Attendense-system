var canvas = document.querySelector('canvas');
var chart = canvas.getContext('2d');

const label = [
    "January", "February", "March", "April", "May", "June", "July"
];

// Chart.defaults.global.defaultFontFamily = 'Helvetica';
// Chart.defaults.global.defaultFontSize = 18;

var myChart = new Chart(chart, {
    type: 'bar',
    data: {
        labels: label,
        datasets: [{
            label: 'Attendanse',
            data: [45, 59, 80, 81, 56, 55, 90],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgb(97, 101, 161)'

        }]

    },
    Option: {}

})