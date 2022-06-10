TESTER = document.getElementById('test');

var data = [{
    values: [50.8, 47.6, 45.6, 43.4, 43.3, 43.2, 42.8, 42.3, 40.6, 40.3],
    labels: ['Cook Island', 'Palau', 'Nauru', 'Samoa', 'Tonga', 'Niue', 'Marshall Island', 'Qatar', 'Kiribati', 'Tuvalu'],
    type: 'pie'
  }];
  
  var layout = {
    height: 400,
    width: 500
  };
  
  Plotly.newPlot('test', data, layout);
  