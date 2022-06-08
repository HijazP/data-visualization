var c = document.getElementById("bar");
var context = c.getContext("2d");

var width = 1600;
var height = 900;


context.fillStyle = 'white';
context.fillRect(0, 0, width, height);

const border = 50;

context.beginPath();
context.moveTo(border, border);
context.lineTo(border, height - border);
context.lineTo(width - border, height - border);
context.stroke();
context.closePath();

context.save();
context.translate(0, height);
context.scale(1, -1);
for (let index = 1; index <= 7; index++) {
  context.beginPath();
  context.moveTo(((width - (2 * border)) / 7 * index) + border, border);
  context.lineTo(((width - (2 * border)) / 7 * index) + border, height - border);
  context.strokeStyle = 'red';
  context.stroke();
  context.closePath();
}
context.restore();

context.save();
context.translate(0, height);
context.font = "50px Arial";
context.fillStyle = 'black';
for (let index = 1; index <= 7; index++) {
  context.fillText(`${[index]}0`, ((width - (2 * border)) / 7 * index) + (border / 2), -1);
}
context.restore();

const maxGender = 70;

var country = [];
var female = [];
var male = [];

d3.csv("obese_nations_iso.csv", function (csv) {
  csv.map(function (d) {
    country.push(d.country);
    female.push(+d.female);
    male.push(+d.male);
  })



  context.save();
  context.translate(0, height);
  context.scale(1, -1);
  let postY = 1;
  for (let index = 9; index >= 0; index--) {
    context.fillStyle = "gray";
    context.fillRect(border, (((height - (4 * border)) / 10 * postY) + border + 15), ((width - (2 * border)) * (female[index] / maxGender)) + border, 30);
    context.fillStyle = "orange";
    context.fillRect(border, (((height - (4 * border)) / 10 * postY) + border - 15), ((width - (2 * border)) * (male[index] / maxGender)) + border, 30);
    postY++;
  }
  context.restore();

  context.save();
  context.translate(0, height);
  context.font = "40px Arial";
  context.fillStyle = 'black';
  postY = 1;
  for (let index = 9; index >= 0; index--) {
    context.fillText(`${country[index]}`, 0, -1 * (((height - (4 * border)) / 10 * postY) + border));
    postY++;
  }
  context.restore();

});