let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height / 2;

let ballRadius = 100;

let rectX = canvas.width / 1.5;
let rectY = canvas.height / 1.8;
let rectW = 30;
let rectH = 70;

function drawC() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0.5 * Math.PI, Math.PI * 1.87);
  ctx.fillStyle = '#000000';
  ctx.stroke();
  ctx.closePath();
}

function drawRect() {
  ctx.beginPath();
  ctx.rect(rectX, rectY, rectW, rectH);
  ctx.stroke();
  ctx.closePath();
}

function draw() {
  drawC();
  drawRect();
}

setInterval(draw, 10);
