// Erdmann Belén
// Comisión 1 TP1
// Video: https://youtu.be/SPteIVWqV-c

let obra;
let col;
let violeta;

function preload() {
  obra = loadImage('data/opart.png');
}

function setup() {
  createCanvas(800, 400);
  col = color(0);
  violeta = false;
}


function draw() {
  noStroke();
  image(obra, 0, 0, width/2, height);
  grilla(9, height/9, col);
  cruz(4, height/9, 12, col);
  cuadrante1(4, height/9, 12, col);
  cuadrante2(4, height/9, 12, col);

  push();
  translate(height/9*5, height/9*5);
  cuadrante1(4, height/9, 12, col);
  pop();

  push();
  translate(-220, height/9*5);
  cuadrante2(4, height/9, 12, col);
  pop();
}

function mousePressed() {
  if (mouseX > width/2) {
    if (violeta) {
      col = color(0);
    } else {
      col = color(160, random (60, 160), 202);
    }
    violeta = !violeta;
  }
}
