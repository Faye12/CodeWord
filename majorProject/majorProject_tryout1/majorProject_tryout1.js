let angle = 0;
function preload() {
  font = loadFont('data/Eckmannpsych_Large.otf');
}
function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
  //textFont(font);
 // textSize(width / 8);
  //textAlign(CENTER);
}

function draw() {
  background(220);
  push();
  translate(0, 0, mouseX / 4);
  rotateX(angle);
  rotateY(angle * 0.2);
  rotateX(angle * 0.4);
  normalMaterial();
  //text('welcome', 0, 0);
  ellipse(windowWidth/5,windowHeight/5,mouseX/2);
  angle += 0.02;
  pop();
  fill(255, 0, 0);

}
