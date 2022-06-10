TESTER = document.getElementById('pie');

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

  var val = [];
  var lab = [];
  for (let index = 0; index < 10; index++) {
    lab[index] = country[index];
    val[index] = value[index];
  }

    console.log(val);
    console.log(lab);
  var data = [{
    values: val,
    labels: lab,
    type: 'pie'
  }];

  var layout = {
    height: 400,
    width: 500
  };

  Plotly.newPlot('pie', data, layout);

});