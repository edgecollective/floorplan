console.log('you are great');

function letMeCallYou()
{
    alert("Bazinga!!!  you called letMeCallYou")
}

function makeChart(ctx,mydata)
{
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
        datasets: [{
        label: 'CO2 (PPM)',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: mydata
        }]
        },
        // Configuration options go here
        options: {
        scales: {
        xAxes: [{
        type: 'time',
        distribution: 'linear',
        ticks: {
        major: {
        enabled: true, // <-- This is the key line
        fontStyle: 'bold', //You can also style these values differently
        fontSize: 14, //You can also style these values differently
        },
        },
        }],
        },
        zone: "America/NewYork"
        }
        });
}