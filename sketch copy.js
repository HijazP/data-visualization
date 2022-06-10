var d = document.getElementById("myCanvas2");
var context2 = d.getContext("2d");

var width = 1600;
var height = 900;

context2.fillStyle = 'white';
context2.fillRect(0, 0, width, height);

var border = 50;

context2.beginPath();
context2.moveTo(border, border);
context2.lineTo(border, height - border);
context2.lineTo(width - border, height - border);
context2.stroke();
context2.closePath();

context2.save();
context2.translate(0, height);
context2.scale(1, -1);
for (let index = 1; index <= 7; index++) {
  context2.beginPath();
  context2.moveTo(((width - (2 * border)) / 7 * index) + border, border);
  context2.lineTo(((width - (2 * border)) / 7 * index) + border, height - border);
  context2.strokeStyle = "black";
  context2.stroke();
  context2.closePath();
}
context2.restore();

context2.save();
context2.translate(0, height);
context2.font = "25px Arial";
context2.fillStyle = "black";
for (let index = 1; index <= 7; index++) {
  context2.fillText(`${[index]}0`, ((width - (2 * border)) / 7 * index) + border - 15, -1 * border / 2);
}
context2.restore();

context2.fillStyle = "#7ea6e6";
context2.fillRect((width / 2) - 100, height - 15, 50, 15);
context2.font = "20px Arial";
context2.fillText("Value", (width / 2) - 45, height);

var maxGender = 70;

var country = [];
var female = [];
var male = [];
var code = [];
var value = [];

d3.csv("obese_nations_iso.csv", function (csv) {
  csv.map(function (d) {
    country.push(d.country);
    female.push(+d.female);
    male.push(+d.male);
    code.push(d.code);
    value.push(+d.value);
  })

  context2.save();
  context2.translate(0, height);
  context2.scale(1, -1);
  var postY = 1;

  for (let index = 9; index >= 0; index--) {
    context2.fillStyle = "#7ea6e6";
    context2.fillRect(border, (((height - (4 * border)) / 10 * postY) + border), ((width - (2 * border)) * (value[index] / maxGender)) + border, 60)
    postY++;
  }
  context2.restore();

  context2.save();
  context2.translate(0, height);
  context2.font = "20px Arial";
  context2.fillStyle = "black";
  postY = 1;
  for (let index = 9; index >= 0; index--) {
    context2.fillText(`${code[index]}`, 0, -1 * (((height - (4 * border)) / 10 * postY) + border + 10));
    postY++;
  }
  context2.restore();
  
});