let angle = 0,
  img;
let size = 8;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}
function preload() {
  img = loadImage("strawbs!!.png");
}

function draw() {
  orbitControl();
  background(255);

  for (let i = 0; i < width; i += width / size) {
    for (let j = 0; j < height; j += height / size) {
      for (let k = 0; k < width; k += width / size) {
        strokeWeight(0.4);
        stroke("green");
        push();
        translate(i - width / 2, j - height / 2, k);
        texture(img); // put your image variable name here
        rotateY(angle);
        sphere(40);
        pop();
        angle = angle + 0.02;
      }
    }
  }
}
