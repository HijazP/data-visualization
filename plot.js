TESTER = document.getElementById('test');

var country = [];
var female = [];
var male = [];
var value = [];

d3.csv('obese_nations_iso.csv', function (csv) {

    csv.map(function (d) {
        country.push(d.country);
        value.push(+d.value);
        female.push(+d.female);
        male.push(+d.male);
    })

    var xData = [];
    var yData = [];
    for (let index = 0; index < 10; index++) {
        xData[index] =  country[index];
        yData[index] = value[index];
    }

    var data = [
        {
            x: xData,
            y: yData,
            type: "bar"
        }
    ];

    Plotly.newPlot("test", data);

});