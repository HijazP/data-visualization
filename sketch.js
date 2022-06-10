const settings = {
  dimensions: [ 1600, 900 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

context.fillStyle = 'white';
context.fillRect(0, 0, width, height);

    context.save();
    context.translate(0, height);
    context.scale(1, -1);
    for (let index = 1; index <= 6; index++) {
      context.beginPath();
      context.moveTo(((width - (2 * border)) / 6 * index) + border, border);
      context.lineTo(((width - (2 * border)) / 6 * index) + border, height - border);
      context.strokeStyle = 'red';
      context.stroke();
      context.closePath();
    }
    context.restore();

    context.save();
    context.translate(0, height);
    context.font = "28px Arial";
    context.fillStyle = 'black';
    for (let index = 1; index <= 6; index++) {
      context.fillText(`${[index]}0`, ((width - (2 * border)) / 6 * index) + 10 + (border / 2), -15);
    }
    context.restore();

context.save();
context.translate(0, height);
context.scale(1, -1);
for (let index = 1; index <= 7; index++) {
  context.beginPath();
  context.moveTo(((width - (2 * border)) / 7 * index) + border, border);
  context.lineTo(((width - (2 * border)) / 7 * index) + border, height - border);
  context.strokeStyle = "purple";
  context.stroke();
  context.closePath();
}
context.restore();

context.save();
context.translate(0, height);
context.font = "25px Arial";
context.fillStyle = "black";
for (let index = 1; index <= 7; index++) {
  context.fillText(`${[index]}0`, ((width - (2 * border)) / 7 * index) + border - 15, -1 * border / 2);
}
context.restore();

    d3.csv("obese_nations_iso.csv", function (csv) {
      csv.map(function (d) {
        country.push(d.country);
        female.push(+d.female);
        male.push(+d.male);
      })

var country = [];
var female = [];
var male = [];
var code = [];

d3.csv("obese_nations_iso.csv", function (csv) {
  csv.map(function (d) {
    country.push(d.country);
    female.push(+d.female);
    male.push(+d.male);
    code.push(d.code);
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

  context.fillStyle = "gray";
  context.fillRect((width / 2) - 100, height - 15, 50, 15);
  context.font = "20px Arial";
  context.fillText("Female", (width / 2) - 45, height);
  context.fillStyle = "orange";
  context.fillRect((width / 2) + 50, height - 15, 50, 15);
  context.font = "20px Arial";
  context.fillText("Male", (width / 2) + 105, height);

  context.save();
  context.translate(0, height);
  context.font = "20px Arial";
  context.fillStyle = "black";
  postY = 1;
  for (let index = 9; index >= 0; index--) {
    context.fillText(`${code[index]}`, 0, -1 * (((height - (4 * border)) / 10 * postY) + border + 10));
    postY++;
  }
  context.restore();

});
