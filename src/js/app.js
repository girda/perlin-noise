import Perlin from './lib/perlin';

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let size = 500;

canvas.width = size;
canvas.height = size;

let NUM = 100;
let radius = 60;
// let centerX = 200;
// let centerY = 200;

// ctx.beginPath();
// for ( let i = 0; i < NUM; i++ ) {

//   let teta = i*2*Math.PI/NUM;
//   let x = centerX + radius*Math.cos(teta);
//   let y = centerY + radius*Math.sin(teta);
//   // ctx.fillRect(x,y,2,2);

// 	 i === 0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
// }	
// ctx.closePath();
// ctx.stroke();


function draw() {
  ctx.clearRect(0,0,size,size);

  for ( let i = 0; i < 70; i++) {
  	ctx.save();
  	ctx.translate(size/2,size/2);
    ctx.beginPath();
    for ( let j = 0; j < NUM; j++ ) {

      let teta = j*2*Math.PI/NUM;
      let x = (radius + i*10/2)*Math.cos(teta) + 30*Perlin(2*Math.cos(teta),time/20+i/6,0);
      let y = (radius + i*10/2)*Math.sin(teta) + 30*Perlin(2*Math.sin(teta),time/20+i/6,0);

      i === 0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
    }	
    ctx.closePath();
    ctx.strokeStyle = 'hsl('+i*5+',50%,50%)';
    ctx.stroke();
    ctx.restore();
  }
}

let time = 500;

function render() {
  draw();
  time++;
  window.requestAnimationFrame(render);
}

render();

