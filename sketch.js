const canvasSketch = require('canvas-sketch');

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
  };
};

canvasSketch(sketch, settings);
