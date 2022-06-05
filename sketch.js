const settings = {
  dimensions: [ 1600, 900 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const border = 50;

    context.beginPath();
    context.moveTo(border, border);
    context.lineTo(border, height - border);
    context.lineTo(width - border, height - border);
    context.stroke();

    const maxGender = 60;

    var country = [];
    var female = [];
    var male = [];

    d3.csv("obese_nations_iso.csv", function (csv) {
      csv.map(function (d) {
        country.push(d.country);
        female.push(+d.female);
        male.push(+d.male);
      })
    });

    console.log("country", country);
    console.log("female", female);
    console.log("male", male);
  };
};

canvasSketch(sketch, settings);
