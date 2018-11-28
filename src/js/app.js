import Perlin from './lib/perlin';

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let size = 500;

canvas.width = size*2;
canvas.height = size;

const NUM = 100;

function random(num) {
  return Math.floor( Math.random()*num );
}

function draww() {

  ctx.save();
  ctx.beginPath();
  for (var i = 0; i < NUM; i++) {
    ctx.lineTo( i*10, 400*Perlin(i/20,time/200+i/1000,0));
  }
  ctx.strokeStyle = '#000';
  ctx.globalAlpha=0.05;
  ctx.stroke();
  ctx.restore();
}

let time = 0;

function render() {
  draww();
  time++;
  window.requestAnimationFrame(render);
}

render();

