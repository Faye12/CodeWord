let bubble;
let Tcircle = [];

function preload() {
  bubble = loadImage('data/bubble0.png');
  for (let i=0; i<3;i++){}
  Tcircle[i] = loadImage('data/bubble'+ i +'.png');
  
}
function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
}
  var circles = []; 
  
function setup() { 
  createCanvas(windowWidth, windowHeight);
  noStroke();
  
  for (let i = 0; i < 50; i++) {
    var x = random(width);
    var y = random(height/5);
    var d = random(20, 190);
    let c = color(25, 255, 255);
    var s = random(0.4, 3);
    circles[i] = new DrawCircle(x, y, d, c, s);
  }
} 

function draw() { 
  background(220);
 

  for (var i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }
  
  // keep the number of circles on the canvas under 60
  if (circles.length > 50) {
    circles.shift();
  }
  
}

function mousePressed() {
  // click the mouse to create a new DrawCircle object and add it to the circles array
  var d = random(20, 150);
  let c = image(Tcircle,0,0);
  var s = random(0.2, 3);
  var newCircle = new DrawCircle(mouseX, mouseY, d, c, s);
  circles.push(newCircle);
}


class DrawCircle {
constructor(x, y, d, c, s,img) {
  this.xPos = x;
  this.yPos = y;
  this.diameter = d;
  this.image = c;
  this.speed = s;
  this.Tcircle = img;
}
  
  display() {
    image(bubble,this.xPos,this.yPos,this.diameter,this.diameter);

  }
  
  move() {
    this.yPos += this.speed;
    // the circle is outside the canvas, retset its position at the top
    if (this.yPos - this.diameter/2 > height) {
      this.yPos = -this.diameter/2;
    }
  }
}
