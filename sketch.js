function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  circle(width * .5, height * .5, width * .25)
}

function keyPressed() {
  switch (key) {
    case 's':
      save(`${Date.now()}-out.png`)
      break;
  
    default:
      break;
  }
}