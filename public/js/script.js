
console.log('you are great');

function letMeCallYou()
{
    alert("Bazinga!!!  you called letMeCallYou")
}

function makeChart(ctx,bdata)
{
    var co2_vs_time = [];
            for(var i = 0; i < bdata.length; i++) {
            var thisco2 = bdata[i].co2;
            var timeutc = bdata[i].created;
            var localtime = luxon.DateTime.fromISO(timeutc).toLocal().toString();
            co2_vs_time.push({"t":localtime,"y":thisco2})
            }
    
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
        datasets: [{
        label: 'CO2 (PPM)',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: co2_vs_time
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